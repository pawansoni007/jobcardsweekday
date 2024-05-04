import { Typography } from "@mui/material";

export default function Salary({
  salaryCurrencyCode,
  minSalary,
  maxSalary,
}) {
  return (
    <Typography sx={{ color: "#4d5968", mt:1 }}>
      Estimated Salary: {salaryCurrencyCode}{" "}
      {[minSalary, maxSalary].filter(Boolean).join(" - ")} LPA ✅
    </Typography>
  );
}
