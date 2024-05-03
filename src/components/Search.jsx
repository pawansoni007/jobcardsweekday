import { TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Search({ name, label, placeholder }) {
  const value = useSelector((state) => state.filters[name]);
  const dispatch = useDispatch();

  return (
    <div>
      {value.length > 0 && <Typography variant="subtitle2">{label}</Typography>}
      <TextField
        value={value}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FILTER",
            payload: {
              filterName: name,
              filterValue: e.target.value,
            },
          })
        }
        size="small"
        sx={{ width: placeholder.length + 1 + "ch" }}
        placeholder={placeholder}
        variant="outlined"
      />
    </div>
  );
}
