import {
    LuLayoutDashboard,
    LuCalendarCheck,
    LuClipboardList,
    LuLogOut,
} from 'react-icons/lu';

export const SideMenuData = [
    {
        id: "01",
        title: "Dashboard",
        path: "/dashboard",
        icon: LuLayoutDashboard,
    },
    {
        id: "02",
        title: "My Schedule",
        path: "/schedule",
        icon: LuCalendarCheck, 
    },
    {
        id: "03",
        title: "My Task",
        path: "/tasks",
        icon: LuClipboardList,
    },
    {
        id: "04",
        title: "Logout",
        path: "/logout", // atau bisa gunakan handler manual onClick
        icon: LuLogOut,
    },
];

export const PriorityData = [
    {  label: "Low", value: "Low" },
    {  label: "Medium", value: "Medium" },
    {  label: "High", value: "High" },
]

export const StatusData = [
    {  label: "Pending", value: "Pending" },
    {  label: "In Progress", value: "In Progress" },
    {  label: "Completed", value: "Completed" },
]