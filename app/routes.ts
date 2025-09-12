import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/join", "routes/join.tsx"),
    route("/attendance", "routes/attendance.tsx"),
    route("/forms", "routes/forms.tsx"),
    route("/leadership", "routes/leadership.tsx"),
    route("/meeting-info", "routes/meeting-info.tsx"),
    route("/bylaws", "routes/bylaws.tsx"),
] satisfies RouteConfig;
