import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { IEmployee } from "@/lib/types/employee.types";

const EmployeeCard = ({ employee }: { employee: IEmployee }) => {
  return (
    <Card
      className="w-full "
      sx={{ p: "12px", backgroundColor: "#F7F7F7", boxShadow: "none" }}
    >
      <div className="w-full">
        {/* First Line: Name & Income */}
        <div className="flex justify-between w-full gap-3">
          <Typography variant="h6" fontSize={14} fontWeight="semibold">
            {employee?.employee?.name}
          </Typography>
          <Typography
            variant="body2"
            fontSize={12}
            fontWeight={400}
            color="#A3A3A3"
          >
            {/* {smena} */}
          </Typography>
        </div>

        <Divider sx={{ my: 1 }} />

        {/* Second Line: Smena & Expense */}
        <div className="flex justify-between w-full gap-3">
          <Box display="flex" alignItems="center" gap={1}>
            <ArrowUpward
              sx={{ color: "#1ACD81", fontSize: 20 }}
              className="rotate-[-135deg]"
            />
            <Typography variant="body1" fontSize={12} sx={{ color: "#1ACD81" }}>
              {employee?.total_income?.toLocaleString()} UZS
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <ArrowDownward
              sx={{ color: "#EF5C44", fontSize: 20 }}
              className="rotate-[-135deg]"
            />
            <Typography variant="body1" sx={{ color: "#EF5C44", fontSize: 12 }}>
              {employee?.total_expense?.toLocaleString()} UZS
            </Typography>
          </Box>
        </div>
      </div>
    </Card>
  );
};

export default EmployeeCard;
