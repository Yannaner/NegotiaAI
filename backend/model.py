import matplotlib.pyplot as plt
import numpy as np

# Define financial projections for each year
years = ["Year 1", "Year 2", "Year 3"]

# Target revenues from the business plan
revenue = {
    "Year 1": 100_000,   # Pilot customers revenue
    "Year 2": 1_000_000, # Growth in consumer subscribers/enterprise customers
    "Year 3": 5_000_000  # Expansion into larger businesses and consumer market
}

# Startup (fixed) costs for each year (as given in the business plan)
fixed_costs = {
    "Year 1": 200_000,
    "Year 2": 500_000,
    "Year 3": 1_250_000
}

# Assumed variable cost as a percentage of revenue (covers operational costs, marketing, customer acquisition, etc.)
variable_cost_percent = 0.30

# Calculate variable costs and total costs for each year
variable_costs = {year: revenue[year] * variable_cost_percent for year in years}
total_costs = {year: fixed_costs[year] + variable_costs[year] for year in years}

# Calculate profit for each year
profit = {year: revenue[year] - total_costs[year] for year in years}

# Display the results
print("Revenue Model Summary:")
for year in years:
    print(f"{year}:")
    print(f"  Revenue       = ${revenue[year]:,.2f}")
    print(f"  Fixed Costs   = ${fixed_costs[year]:,.2f}")
    print(f"  Variable Costs= ${variable_costs[year]:,.2f}")
    print(f"  Total Costs   = ${total_costs[year]:,.2f}")
    print(f"  Profit        = ${profit[year]:,.2f}\n")

# Prepare data for visualization
x = np.arange(len(years))  # label locations
width = 0.25  # width of each bar

# Create bar charts for Revenue, Total Costs, and Profit
fig, ax = plt.subplots(figsize=(10, 6))
rects1 = ax.bar(x - width, [revenue[year] for year in years], width, label='Revenue')
rects2 = ax.bar(x, [total_costs[year] for year in years], width, label='Total Costs')
rects3 = ax.bar(x + width, [profit[year] for year in years], width, label='Profit')

# Add labels, title, and custom x-axis tick labels
ax.set_ylabel('Amount ($)')
ax.set_title('Negotia AI: Revenue Model Breakdown')
ax.set_xticks(x)
ax.set_xticklabels(years)
ax.legend()

# Function to attach a text label above each bar displaying its height
def autolabel(rects):
    for rect in rects:
        height = rect.get_height()
        ax.annotate(f'${height:,.0f}',
                    xy=(rect.get_x() + rect.get_width() / 2, height),
                    xytext=(0, 3),  # 3 points vertical offset
                    textcoords="offset points",
                    ha='center', va='bottom')

autolabel(rects1)
autolabel(rects2)
autolabel(rects3)

plt.tight_layout()
plt.show()
