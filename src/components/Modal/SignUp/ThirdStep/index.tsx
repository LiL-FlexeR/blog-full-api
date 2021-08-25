import { Box, Button, Typography } from "@material-ui/core";
import { IStepper } from "../../../../types/forms";
import { useStyles } from "../styled";

const ThirdStep = ({ props, index, setIndex }: IStepper) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Box className={classes.box}>
        <Typography>Name: {props.values.name}</Typography>
        <Typography>E-mail: {props.values.email}</Typography>
        <Typography>Password: {props.values.password}</Typography>
        <Typography>Profession: {props.values.profession}</Typography>
        <Typography>Skills: {props.values.skills}</Typography>
        <Typography>Details: {props.values.details}</Typography>
      </Box>
      <Box>
        <Button onClick={() => setIndex(index - 1)}>Back</Button>
        <Button className={classes.button} type="submit">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default ThirdStep;
