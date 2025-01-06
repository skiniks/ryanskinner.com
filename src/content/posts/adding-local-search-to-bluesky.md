---
title: Adding Local Search History to Bluesky
description: A technical deep-dive into implementing persistent search history in React Native using AsyncStorage, featuring real-world code examples from an open-source contribution to the Bluesky social network.
date: 2024-01-25T00:00:00-05:00
tags: [Open Source, React Native, Software Development, TypeScript]
---

This article details the implementation of persistent search history in Bluesky's React Native application. The feature enhances user experience by enabling quick access to previous searches through AsyncStorage for data persistence and React's state management for real-time updates.

### Implementation Architecture

The search history feature consists of three main components: persistent storage using AsyncStorage, state management with React hooks, and a user interface for displaying and interacting with search history. Let's examine each component in detail.

### Storage Layer with AsyncStorage

AsyncStorage provides persistent, key-value storage that's ideal for managing search history. The implementation uses a simple string array structure, limiting storage overhead while maintaining quick access times.

```ts
const [searchHistory, setSearchHistory] = React.useState<string[]>([])

React.useEffect(() => {
  const loadSearchHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('searchHistory')
      if (history !== null) setSearchHistory(JSON.parse(history))
    } catch (e) {
      logger.error('Failed to load search history', e)
    }
  }
  loadSearchHistory()
}, [])
```

### Managing Search History Updates

The history management system maintains a maximum of five entries, implementing a FIFO (First In, First Out) queue to ensure relevance and prevent memory bloat. Each new search term is deduplicated and added to the front of the queue.

```ts
async function updateSearchHistory(newQuery: string) {
  newQuery = newQuery.trim()
  if (newQuery && !searchHistory.includes(newQuery)) {
    let newHistory = [newQuery, ...searchHistory]
    if (newHistory.length > 5) newHistory = newHistory.slice(0, 5)

    setSearchHistory(newHistory)
    try {
      await AsyncStorage.setItem('searchHistory', JSON.stringify(newHistory))
    } catch (e) {
      logger.error('Failed to save search history', e)
    }
  }
}
```

### User Interface Implementation

The UI component renders search history as a dropdown beneath the search bar, appearing only when the search input is focused and empty. This approach provides context-aware access to previous searches while maintaining a clean interface.

```ts
{!query && inputIsFocused && (
  <CenteredView style={styles.searchHistoryContainer}>
    {searchHistory.length > 0 && (
      <View style={styles.searchHistoryContent}>
        {searchHistory.map((historyItem, index) => (
          <Pressable
            key={index}
            onPress={() => handleHistoryItemClick(historyItem)}
            style={styles.historyItem}>
            <Text style={pal.text}>{historyItem}</Text>
          </Pressable>
        ))}
      </View>
    )}
  </CenteredView>
)}
```

### Event Handling

The system handles search history interactions through a simple click handler that updates the search query and triggers a new search operation.

```ts
function handleHistoryItemClick(item: string) {
  setQuery(item)
  onSubmit()
}
```

### Performance Considerations

This implementation prioritizes performance through several key optimizations:
- Limiting history length to prevent memory issues
- Deduplicating entries to avoid redundant storage
- Using React's state management for responsive updates
- Implementing conditional rendering to minimize DOM operations

The feature has been successfully integrated into Bluesky's production environment, demonstrating robust performance characteristics and positive user feedback. Through careful consideration of storage efficiency and UI responsiveness, the implementation provides a seamless search experience while maintaining minimal resource overhead.
