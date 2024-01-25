---
title: Adding Local Search History to Bluesky
description: Enhancing the Bluesky experience with a local search history feature. Taking a look at AsyncStorage's role in data storage and the efficient management of search records in React Native.
date: 2024-01-25T00:00:00-05:00
tags: [Open Source, React Native, Software Development, TypeScript]
---

As an open-source contributor for Bluesky, a React Native social networking application, I recently had the opportunity to contribute by implementing a search history feature, an essential functionality for any app with search capabilities. This not only allowed me to help enhance the app's user experience but also gave me the unique opportunity to work alongside Paul Frazee, a Software Engineer at Bluesky. His enhancements to my initial pull request significantly elevated the feature's effectiveness.

### Understanding the Need for Search History
Bluesky, as a platform with vast content and user interactions, necessitates a robust search functionality. Search history plays a pivotal role here, allowing users to quickly revisit their previous searches, thereby saving time and enhancing app usability.

### The Implementation Strategy
#### Storage Solution with AsyncStorage
The heart of this feature lies in efficiently storing and retrieving the search history. For this, I utilized `AsyncStorage` from `@react-native-async-storage/async-storage`. It's a simple, asynchronous key-value storage system, ideal for storing non-sensitive data like search terms.

```ts
const [searchHistory, setSearchHistory] = React.useState<string[]>([])

React.useEffect(() => {
  const loadSearchHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('searchHistory')
      if (history !== null)
        setSearchHistory(JSON.parse(history))
    }
    catch (e) {
      logger.error('Failed to load search history', e)
    }
  }
  loadSearchHistory()
}, [])
```

#### Updating and Limiting Search History
To keep the search history relevant and manageable, I implemented a function to update the history with new searches, while limiting it to the most recent five entries.

```ts
async function updateSearchHistory(newQuery: string) {
  newQuery = newQuery.trim()
  if (newQuery && !searchHistory.includes(newQuery)) {
    let newHistory = [newQuery, ...searchHistory]
    if (newHistory.length > 5)
      newHistory = newHistory.slice(0, 5)

    setSearchHistory(newHistory)
    try {
      await AsyncStorage.setItem('searchHistory', JSON.stringify(newHistory))
    }
    catch (e) {
      logger.error('Failed to save search history', e)
    }
  }
}
```

#### Displaying the Search History
Displaying the search history in a user-friendly manner was crucial. I designed a dropdown that appears under the search bar, showing the history once the user focuses on the search input.

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

#### Interaction Handling
Interactions with the search history are handled to update the search query and re-submit the search when a user selects an item from the history.

```ts
function handleHistoryItemClick(item: string) {
  setQuery(item)
  onSubmit()
}
```

#### The Impact on Bluesky
The integration of the search history feature in Bluesky boosts the app’s search UX. Users can now effortlessly navigate through their past searches, making the experience more intuitive and efficient.
