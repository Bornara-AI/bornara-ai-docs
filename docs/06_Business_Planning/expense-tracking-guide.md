# Expense Tracking Guide

**Owner:** Mahdi Moradi
**Status:** Draft
**Version:** 1.0.0
**Last Updated:** 2026-03-17
**Applies To:** Company

---

## 1. Overview

This guide defines every deductible expense category, how to record it, and what proof CRA
requires. Use this alongside the
[Excel Tracking Spreadsheet](../../files/Excel/2026%20Logs.xlsx) and the
[CRA Compliance Guide](cra-compliance-guide.md).

---

## 2. T2125 Expense Line Mapping

Every expense falls into a specific T2125 line. Here's the mapping:

| T2125 Line         | Category                    | Your Expenses                              |
|--------------------|-----------------------------|--------------------------------------------|
| Line 8521          | Advertising                 | Facebook, TikTok, Google ads               |
| Line 8590          | Bad debts                   | (unlikely in 2026)                         |
| Line 8690          | Insurance                   | Business portion of home insurance         |
| Line 8710          | Interest (mortgage)         | Business portion of mortgage interest      |
| Line 8760          | Business taxes              | Business portion of property tax           |
| Line 8810          | Office expenses             | Software, supplies, printer ink            |
| Line 8811          | Office stationery/supplies  | Labels, packaging materials                |
| Line 8860          | Professional fees           | Accountant, legal (if any)                 |
| Line 8871          | Management/admin fees       | (if applicable)                            |
| Line 8910          | Rent                        | (N/A — you own your home)                  |
| Line 8960          | Salaries/wages              | Wife + kids wages                          |
| Line 9060          | CCA (depreciation)          | Equipment                                  |
| Line 9180          | Telephone/utilities         | Phone + internet (business %)              |
| Line 9200          | Other expenses              | Domains, hosting, courses, travel          |
| Line 9281          | Motor vehicle expenses      | Business portion of fuel, parking          |
| Line 9945          | Business-use-of-home        | Calculated home office expenses            |

---

## 3. Expense Recording Rules

### What Constitutes a Valid Receipt

For CRA, a valid receipt must show:

- Date of purchase
- Vendor name
- Amount paid
- Description of goods/services
- Payment method

### When You Don't Have a Receipt

CRA accepts alternatives for **small amounts**:

- Bank or credit card statement showing the charge
- PayPal/Stripe transaction record
- Email confirmation
- Written explanation: "Expense of $X incurred on [date] for [purpose]. Receipt unavailable."

### Digital vs Physical

- **Digital receipts** are fully accepted by CRA
- Save as PDF or screenshot
- Organize in the folder structure from the [CRA Compliance Guide](cra-compliance-guide.md)
- Back up to cloud storage

---

## 4. Category-by-Category Guide

### 4.1 Advertising ($1,000–$3,000)

| Platform         | How to Track                          | Receipt Source                     |
|------------------|---------------------------------------|------------------------------------|
| Facebook Ads     | Export monthly billing from Ad Manager| Facebook Ads Manager → Billing     |
| TikTok Ads       | Export monthly billing                | TikTok Ads Manager → Payment       |
| Google Ads       | Export monthly billing                | Google Ads → Billing & payments    |
| Influencer fees  | Save invoices/payment confirmations   | E-transfer + agreement              |

**Deduction:** 100% deductible
**Frequency:** Record monthly

### 4.2 Wages — Wife ($5,200–$15,600)

| Item                | Required                                                  |
|---------------------|-----------------------------------------------------------|
| Timesheet           | Weekly or monthly with date, hours, tasks                 |
| Signed receipt      | For each payment (template in CRA docs)                   |
| E-transfer proof    | Screenshot showing date, amount, recipient                |
| Rate justification  | $20–$30/hour is reasonable for design/admin in Canada     |

**Deduction:** 100% deductible
**Her tax:** She reports this as income on her T1. Below ~$15,000, minimal or no tax.

### 4.3 Wages — Kids ($1,000–$2,000)

| Item                | Required                                                  |
|---------------------|-----------------------------------------------------------|
| Timesheet           | Date, hours, specific tasks                               |
| Signed receipt      | Parent signs on behalf (template in CRA docs)             |
| Rate justification  | $12–$15/hour is at or near minimum wage                   |

**Deduction:** 100% deductible
**Their tax:** $0 (below basic personal amount)

### 4.4 Equipment (CCA)

| Item         | Receipt | CCA Class | Rate | Half-Year Rule Applies |
|--------------|---------|-----------|------|------------------------|
| Laptop       | Yes     | Class 50  | 55%  | Yes                    |
| Phone        | Yes     | Class 50  | 55%  | Yes                    |
| Monitor      | Yes     | Class 50  | 55%  | Yes                    |
| Camera       | Yes     | Class 8   | 20%  | Yes                    |
| Ring light   | Yes     | Class 8   | 20%  | Yes                    |
| Label printer| Yes     | Class 50  | 55%  | Yes                    |
| Office chair | Yes     | Class 8   | 20%  | Yes                    |
| Desk         | Yes     | Class 8   | 20%  | Yes                    |

**Note:** Items under $500 can sometimes be expensed immediately. Items over $500 must be
capitalized and depreciated via CCA.

### 4.5 Home Office

**Calculate once per year:**

```text
Office area: _____ sq ft
Total home area: _____ sq ft
Business use percentage: _____ %

Apply this % to:
- Mortgage interest: $_____ × ___% = $_____
- Utilities: $_____ × ___% = $_____
- Internet: $_____ × ___% = $_____  (can use higher % if justified)
- Property tax: $_____ × ___% = $_____
- Home insurance: $_____ × ___% = $_____
- Repairs (common areas): $_____ × ___% = $_____

Total home office deduction: $_____
```

**Required Proof:**

- Mortgage statement showing interest paid
- Utility bills (or annual summary)
- Internet bills
- Property tax notice
- Insurance policy/bill
- Measurement of office space vs total home

### 4.6 Software & Subscriptions

| Tool          | How to Get Receipt                                        |
|---------------|-----------------------------------------------------------|
| Shopify       | Settings → Billing → Download invoice                     |
| ChatGPT       | Account → Billing → Download receipt                      |
| GitHub        | Settings → Billing → Download invoice                     |
| Canva         | Account → Billing → Download receipt                      |
| Adobe         | Account → Plans & billing → Download invoice              |
| Azure         | Azure Portal → Cost Management → Invoices                 |
| Domain regs   | Registrar dashboard → Invoices                            |

**Deduction:** 100% deductible
**Frequency:** Record monthly or as charged

### 4.7 Travel & Vehicle

**Keep a mileage log:**

```text
Date:       2026-XX-XX
From:       [Home / Office]
To:         [Destination]
Purpose:    [Supplier meeting / Client visit / Product sourcing]
KM:         [X] km
Fuel cost:  $[X] (or calculate from mileage rate)
Parking:    $[X]
```

**CRA Mileage Rate (simplified):** You can use actual costs (fuel + maintenance × business %) or
the CRA per-km rate (~$0.70/km for first 5,000 km, ~$0.64 after).

### 4.8 Meals & Entertainment

**50% deductible only.** Must have clear business purpose.

```text
Date:       2026-XX-XX
Location:   [Restaurant]
Amount:     $[X]
Deductible: $[X × 50%]
Attendees:  Mahdi Moradi, Narjes [Wife] (business partner)
Purpose:    Q2 Shopify strategy review and product selection meeting
```

### 4.9 Cookie Business Expenses

| Expense          | Receipt Type      | Deduction   | Notes                       |
|------------------|-------------------|-------------|------------------------------|
| Ingredients      | Grocery receipt   | 100%        | Mark business items on receipt|
| Packaging        | Store/online      | 100%        | Boxes, labels, tissue         |
| Shipping         | Canada Post/courier| 100%       | Keep tracking numbers         |
| Food permit      | Municipal receipt | 100%        | Keep certificate              |
| Kitchen supplies | Store receipt     | 100% or CCA | Depends on value             |

---

## 5. Tracking Spreadsheet Columns

Your Excel log should have these columns at minimum:

| Column          | Description                                               |
|-----------------|-----------------------------------------------------------|
| Date            | Date of expense                                           |
| Category        | (from categories above)                                   |
| Description     | What was purchased/paid                                   |
| Amount          | Total amount                                              |
| Deductible Amt  | Amount you can deduct (some are partial like meals)       |
| T2125 Line      | Which T2125 line it maps to                               |
| Receipt?        | Yes/No — do you have the receipt?                         |
| Payment Method  | Cash / E-transfer / Credit card / PayPal                  |
| Notes           | Any additional context                                    |

---

## Related Documents

- [Tax Optimization Plan](tax-optimization-plan.md)
- [CRA Compliance Guide](cra-compliance-guide.md)
- [Revenue Model](revenue-model.md)
