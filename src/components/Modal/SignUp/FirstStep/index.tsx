import { Button, TextField } from "@material-ui/core";
import { IStepper } from "../../../../types/forms";
import { useStyles } from "../styled";

const FirstStep = ({ props, index, setIndex }: IStepper) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        name="name"
        placeholder="Enter Name"
        onChange={props.handleChange}
        value={props.values.name}
        variant="outlined"
      />
      <TextField
        name="email"
        placeholder="Enter Email"
        onChange={props.handleChange}
        value={props.values.email}
        variant="outlined"
      />
      <TextField
        className={classes.input}
        name="password"
        placeholder="Enter Password"
        onChange={props.handleChange}
        value={props.values.password}
        variant="outlined"
      />
      <Button className={classes.button} onClick={() => setIndex(index + 1)}>
        Next
      </Button>
    </div>
  );
};

export default FirstStep;
