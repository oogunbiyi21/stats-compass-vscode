# Stats Compass - VS Code Extension

A VS Code extension that provides the Stats Compass MCP server for AI assistants.

## What is Stats Compass?

Stats Compass provides 50+ pandas-powered tools for data science workflows:

- **Data Loading**: Load CSV, Excel, and sample datasets
- **Cleaning**: Drop nulls, impute, dedupe, handle outliers
- **Transforms**: Filter, groupby, pivot, encode, scale
- **EDA**: Describe, correlations, hypothesis tests, data quality
- **Visualization**: Histograms, scatter, bar, ROC curves, confusion matrix
- **ML Workflows**: Classification, regression, time series forecasting

## Requirements

- Python 3.11+
- [uv](https://github.com/astral-sh/uv) package manager

## Installation

1. Install from the VS Code Marketplace
2. The extension will automatically register the Stats Compass MCP server
3. Use with GitHub Copilot or other AI assistants that support MCP

## Usage

Once installed, AI assistants can use Stats Compass tools to:

- Load and explore your data files
- Clean and transform datasets
- Create visualizations
- Train ML models

Example prompts:
- "Load the CSV at ~/Downloads/sales.csv and show me a summary"
- "Create a histogram of the price column"
- "Train a classification model to predict churn"

## Links

- [Stats Compass MCP Server](https://github.com/oogunbiyi21/stats-compass-mcp)
- [PyPI Package](https://pypi.org/project/stats-compass-mcp/)

## License

MIT
