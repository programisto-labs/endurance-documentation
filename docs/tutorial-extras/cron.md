---
sidebar_position: 1
---

# Cron

A CRON is a process that will be launched at a specific time. 

You can create a "crons" folder in your module and a `xxx.cron.ts` file. 

```typescript
import { enduranceCron } from '@programisto/endurance';
import Report from '../models/report.model.js';

// Function to generate daily reports
const generateDailyReport = async () => {
  try {
    const ReportModel = Report.getModel();
    // Your logic to generate daily reports
    const reports = await ReportModel.find({ 
      createdAt: { 
        $gte: new Date(new Date().setHours(0, 0, 0, 0)) 
      } 
    });
    console.log(`Daily report generated with ${reports.length} entries.`);
  } catch (error) {
    console.error('Error generating daily report:', error);
  }
};

// Load a cron job that generates a daily report at midnight
enduranceCron.loadCronJob('generateDailyReport', '0 0 * * *', generateDailyReport);

export default {};
```

## Cron Schedule Format

The cron schedule follows the standard cron format:

```
* * * * *
│ │ │ │ │
│ │ │ │ └─── Day of week (0-7, where 0 and 7 are Sunday)
│ │ │ └───── Month (1-12)
│ │ └─────── Day of month (1-31)
│ └───────── Hour (0-23)
└─────────── Minute (0-59)
```

Examples:
- `0 0 * * *` - Every day at midnight
- `0 */6 * * *` - Every 6 hours
- `0 9 * * 1-5` - Every weekday at 9 AM
- `*/30 * * * *` - Every 30 minutes
