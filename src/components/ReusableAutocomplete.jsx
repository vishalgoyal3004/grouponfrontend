import { Autocomplete, Box, TextField } from "@mui/material"
import VirtualizedList from "../components/VirtualizedList"
import PropTypes from "prop-types"

export default function ReusableAutocomplete({
  options,
  placeholder,
  loading,
  inputValue,
  onChange,
  onInputChange,
}) {
  return (
    <Autocomplete
      sx={{
        borderRadius: "1rem",
        "& .MuiOutlinedInput-root": {
          borderRadius: "1rem",
        },
      }}
      name="wiki-search-Input"
      options={options}
      getOptionLabel={(option) => option.title || option}
      loading={loading}
      inputValue={inputValue}
      onInputChange={onInputChange}
      onChange={onChange}
      ListboxComponent={VirtualizedList}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          variant="outlined"
          fullWidth
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: loading ? <span>Loading...</span> : null,
            },
          }}
        />
      )}
      renderOption={(props, option) => (
        <Box
          key={option.title}
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width={40}
            height={40}
            src={option?.thumbnail?.source}
            alt=""
          />
          {option?.title}
        </Box>
        // <li {...props} key={option.title}>
        //   {option.title}
        // </li>
      )}
    />
  )
}

ReusableAutocomplete.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  onInputChange: PropTypes.func,
}
