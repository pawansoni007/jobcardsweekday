import { Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";

export default function MultiValueFilter({ name, label, placeholder, options }) {
  const value = useSelector((state) => state.filters[name]);
  const dispatch = useDispatch();

  return (
    <div>
      {value.length > 0 && <Typography variant="subtitle2">{label}</Typography>}
      <Autocomplete
        multiple
        size="small"
        options={options}
        getOptionLabel={(option) => option.label}
        value={value}
        onChange={(_, newValue) => {
          dispatch({
            type: "UPDATE_FILTER",
            payload: {
              filterName: name,
              filterValue: newValue,
            },
          });
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            sx={{ minWidth: placeholder.length + 8 + "ch" }}
          />
        )}
      />
    </div>
  );
}
