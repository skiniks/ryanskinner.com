---
title: 'Building a Node.js Application for AI-Powered Trading and Trend Analysis'
description: Leverage real-time data, trend analysis, and AI-powered sentiment analysis to make informed trading decisions with trendsettler.
date: 2024-04-14T00:00:00-05:00
tags:
  [
    'AI',
    'Fintech',
    'GPT-3.5 Turbo',
    'Node.js',
    'OpenAI',
    'Sentiment Analysis',
    'Trading',
    'Trend Analysis',
  ]
---

In today’s ever-fluctuating financial markets, the value of having advanced tools at our disposal is immeasurable. That's why I developed **trendsettler**, a Node.js application that harnesses real-time data, sophisticated trend analysis, and AI-powered sentiment analysis, using OpenAI's GPT-3.5 Turbo. **trendsettler** is designed to provide a deeper understanding of market trends and assist in making informed trading decisions.

## Key Features of the Application

### Real-Time Data Retrieval

In **trendsettler**, we fetch real-time stock prices and news updates using Polygon.io's API. This data is crucial for making informed decisions and understanding market trends. Here’s how I pull historical stock data crucial for trend analysis:

```ts
export async function fetchHistoricalData(
  symbol: string,
  startDate: string,
  endDate: string,
  frequency: string = 'day',
) {
  const url = `https://api.polygon.io/v2/aggs/ticker/${symbol}/range/1/${frequency}/${startDate}/${endDate}?adjusted=true&sort=asc&apiKey=${POLYGON_API_KEY}`
  const response = await fetch(url)
  if (!response.ok) throw new Error('Failed to fetch historical data')
  const data = await response.json()
  return data.results.map((day: DayData) => ({
    date: day.t,
    open: day.o,
    high: day.h,
    low: day.l,
    close: day.c,
    volume: day.v,
  }))
}
```

### Sentiment Analysis Using GPT-3.5 Turbo

Understanding the mood of the market is key, and that's where sentiment analysis comes in. I use OpenAI's GPT-3.5 Turbo to decode the emotions behind news headlines, rating them on a scale from very negative to very positive. This insight is crucial in shaping investment strategies:

```ts
export async function analyzeSentiment(title: string): Promise<number> {
  const prompt = `Given the news headline "${title}", rate the sentiment from 1 (very negative) to 10 (very positive). Provide your answer in the format: "Rating: X."`
  try {
    const sentimentAnalysis = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a highly intelligent question answering bot.',
        },
        { role: 'user', content: prompt },
      ],
    })

    if (sentimentAnalysis.choices?.[0]?.message?.content) {
      const sentimentText = sentimentAnalysis.choices[0].message.content.trim()
      const ratingMatch = sentimentText.match(/Rating:\s*(\d+)/)
      return ratingMatch ? Number.parseInt(ratingMatch[1], 10) : 5
    }
  } catch (error) {
    console.error('Error analyzing sentiment:', error)
  }
  return 5
}
```

### Trend Analysis

To identify buying or selling signals, I calculate Exponential Moving Averages (EMAs). This helps differentiate significant market movements from regular fluctuations:

```ts
export function calculateEMA(data: number[], windowSize: number): number[] {
  const ema: number[] = Array.from<number>({ length: data.length }).fill(0)
  const k = 2 / (windowSize + 1)

  if (data.length > 0) {
    ema[0] = data[0]

    for (let i = 1; i < data.length; i++)
      ema[i] = data[i] * k + ema[i - 1] * (1 - k)
  }

  return ema
}
```

### Decision Making

Merging sentiment data with trend analysis, **trendsettler** advises whether to buy, sell, or hold. Decisions are based on a mix of price movements, market trends, and the overall mood derived from news:

```ts
export function decideAction(
  purchasePrice: number,
  currentPrice: number,
  sentiment: number,
  trend: string,
): string {
  const profitOrLoss = ((currentPrice - purchasePrice) / purchasePrice) * 100
  let decision = `Hold. Your profit/loss would be ${profitOrLoss.toFixed(2)}%.`

  const isSignificantUptrend = trend === 'Significantly Uptrend'
  const isSignificantDowntrend = trend === 'Significantly Downtrend'

  if (sentiment >= 6 && profitOrLoss > 20 && !isSignificantUptrend) {
    decision = `Consider selling to take profit. Sentiment is positive, and your profit is substantial at ${profitOrLoss.toFixed(
      2,
    )}%. The market might correct itself after such a rally unless it's a significant uptrend.`
  } else if (sentiment < 4 && profitOrLoss > 0) {
    decision = `Consider selling to secure profits. Sentiment is negative, and you currently have a profit of ${profitOrLoss.toFixed(2)}%. This might be prudent if not in a significant downtrend.`
  }

  if (
    sentiment >= 7 &&
    (trend === 'Uptrend' || isSignificantUptrend) &&
    profitOrLoss < 10
  )
    decision = `Strong Buy. Market sentiment is very positive, and the (significant) uptrend suggests a good entry point for growth. Your current profit/loss is at ${profitOrLoss.toFixed(2)}%.`
  else if (sentiment >= 5 && (trend === 'Uptrend' || isSignificantUptrend))
    decision = `Consider buying more. Positive sentiment and an (significant) uptrend suggest potential for growth. Your current profit/loss is at ${profitOrLoss.toFixed(2)}%.`
  else if (sentiment >= 6 && profitOrLoss <= 20)
    decision = `Hold or consider buying more. Sentiment is positive, and there might be more room for growth, especially in an uptrend. Your current profit/loss is at ${profitOrLoss.toFixed(2)}%.`
  else if (sentiment < 4 && profitOrLoss <= 0)
    decision = `Hold. Sentiment is negative, and selling now would realize a loss. Your current profit/loss is at ${profitOrLoss.toFixed(2)}%.`

  if (isSignificantUptrend)
    decision += ` The market indicates a significant uptrend, suggesting a strong potential for further gains. A long position is highly recommended if sentiment aligns.`
  else if (isSignificantDowntrend)
    decision += ` The market indicates a significant downtrend, suggesting a strong potential for further losses. A short position might be considered if sentiment aligns.`
  else if (trend === 'Uptrend')
    decision += ` Market trend indicates an uptrend, suggesting potential for further gains. Consider maintaining a long position if sentiment aligns.`
  else if (trend === 'Downtrend')
    decision += ` Market trend indicates a downtrend, suggesting potential for further losses. Consider a short position if sentiment aligns.`

  return decision
}
```

### Strategic Outlook

**trendsettler** is a powerful tool for traders and investors looking to leverage AI and real-time data for making informed decisions. By combining sentiment analysis, trend analysis, and real-time data, users can gain a deeper understanding of market dynamics and make more informed trading choices. If you're interested in exploring more, feel free to check out the full source code on [GitHub](https://github.com/skiniks/trendsettler).

[![trendsettler](/images/trendsettler.png)](/images/trendsettler.png)
