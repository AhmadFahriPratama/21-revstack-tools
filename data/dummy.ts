import type { ProjectData } from "@/types";

export const projectData: ProjectData = {
  "projectId": "21",
  "folder": "21-revstack-tools",
  "appName": "RevStack Tools",
  "domain": "Productivity",
  "heroHeadline": "Get more done, with less friction",
  "heroSubtitle": "A unified workspace combining your tasks, deadlines, and project priorities. No distractions, just execution.",
  "features": [
    {
      "icon": "CheckSquare",
      "title": "Task Management",
      "description": "Break down large projects into actionable, bite-sized tasks."
    },
    {
      "icon": "ListTodo",
      "title": "Kanban Boards",
      "description": "Visualize your workflow and move tasks across stages."
    },
    {
      "icon": "CalendarClock",
      "title": "Deadline Tracking",
      "description": "Never miss a due date with clear, automated reminders."
    },
    {
      "icon": "Users",
      "title": "Team Delegation",
      "description": "Assign work to the right people and monitor their progress."
    }
  ],
  "stats": [
    {
      "label": "Tasks Completed",
      "value": "345",
      "trend": "+24"
    },
    {
      "label": "Pending Tasks",
      "value": "18",
      "trend": "-5"
    },
    {
      "label": "Overdue",
      "value": "2",
      "trend": "-1"
    },
    {
      "label": "Productivity Score",
      "value": "88/100",
      "trend": "+5"
    }
  ],
  "tableColumns": [
    {
      "key": "task",
      "label": "Task"
    },
    {
      "key": "project",
      "label": "Project"
    },
    {
      "key": "assignee",
      "label": "Assignee"
    },
    {
      "key": "due_date",
      "label": "Due Date"
    },
    {
      "key": "priority",
      "label": "Priority"
    },
    {
      "key": "status",
      "label": "Status"
    }
  ],
  "tableRows": [
    {
      "id": "TSK-001",
      "task": "Design Homepage Mockup",
      "project": "Website Redesign",
      "assignee": "Rina A.",
      "due_date": "2026-04-28",
      "priority": "High",
      "status": "In Progress"
    },
    {
      "id": "TSK-002",
      "task": "Write API Documentation",
      "project": "Backend V2",
      "assignee": "Kevin W.",
      "due_date": "2026-05-02",
      "priority": "Medium",
      "status": "To Do"
    },
    {
      "id": "TSK-003",
      "task": "Fix Login Bug",
      "project": "Mobile App",
      "assignee": "Budi S.",
      "due_date": "2026-04-26",
      "priority": "Urgent",
      "status": "Done"
    },
    {
      "id": "TSK-004",
      "task": "Prepare Investor Pitch Deck",
      "project": "Fundraising",
      "assignee": "Sarah H.",
      "due_date": "2026-05-10",
      "priority": "High",
      "status": "In Progress"
    },
    {
      "id": "TSK-005",
      "task": "Update Privacy Policy",
      "project": "Legal",
      "assignee": "Diana P.",
      "due_date": "2026-04-30",
      "priority": "Low",
      "status": "To Do"
    },
    {
      "id": "TSK-006",
      "task": "Optimize Database Queries",
      "project": "Backend V2",
      "assignee": "Kevin W.",
      "due_date": "2026-05-05",
      "priority": "High",
      "status": "Blocked"
    },
    {
      "id": "TSK-007",
      "task": "Create Social Media Assets",
      "project": "Q2 Campaign",
      "assignee": "Rina A.",
      "due_date": "2026-04-27",
      "priority": "Medium",
      "status": "Done"
    },
    {
      "id": "TSK-008",
      "task": "Review Q1 Financials",
      "project": "Accounting",
      "assignee": "Sarah H.",
      "due_date": "2026-04-25",
      "priority": "Urgent",
      "status": "Done"
    }
  ],
  "statuses": [
    "To Do",
    "In Progress",
    "Done",
    "Blocked"
  ],
  "ctaHeadline": "Stop switching between apps",
  "ctaSubtitle": "Bring your team's work into one unified, efficient platform.",
  "ctaButtonText": "Go to Workspace",
  "readmeDescription": "A productivity workspace focusing on task tracking, prioritization, and team assignments.",
  "readmeFeaturesList": [
    "Task prioritization",
    "Project grouping",
    "Assignee tracking",
    "Status workflow management"
  ],
  "theme": {
    "heroLayout": "split",
    "navStyle": "dark",
    "cardStyle": "gradient",
    "primary": "#4d7c0f",
    "secondary": "#65a30d",
    "accent": "#f7fee7",
    "background": "#1c1917",
    "text": "#f5f5f4",
    "heroGradient": "linear-gradient(135deg, rgba(77, 124, 15, 0.98) 0%, rgba(101, 163, 13, 0.88) 100%)",
    "heroGlow": "radial-gradient(circle at 15% 15%, rgba(101, 163, 13, 0.36) 0%, transparent 42%)",
    "heroEdge": "radial-gradient(circle at 90% 10%, rgba(247, 254, 231, 0.14) 0%, transparent 28%)",
    "surface": "rgba(77, 124, 15, 0.05)",
    "surfaceStrong": "rgba(77, 124, 15, 0.08)",
    "border": "rgba(77, 124, 15, 0.12)",
    "borderStrong": "rgba(77, 124, 15, 0.22)",
    "softText": "rgba(245, 245, 244, 0.72)",
    "primarySoft": "rgba(77, 124, 15, 0.12)",
    "secondarySoft": "rgba(101, 163, 13, 0.12)",
    "secondaryStrong": "rgba(101, 163, 13, 0.18)",
    "accentSoft": "rgba(247, 254, 231, 0.8)"
  }
};
