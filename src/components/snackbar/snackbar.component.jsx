import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toggleSnackBar } from "../../redux/snackBar/snackBar.actions";
import {
  selectShowSnack,
  selectSnackBarMessage,
} from "../../redux/snackBar/snackBar.selector";
import { useSnackbar } from 'notistack';

const SimpleSnackbar = ({toggleSnackBar,messageSnackBar ,showSnackBar}) =>{
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(()=>{
        enqueueSnackbar(messageSnackBar);
    },[])
    const handleClick = () => {
        
    };

    return (
        <button onClick={handleClick}>messageSnackBar</button>
    );
}
const mapStateToProps = (state) => ({
  showSnackBar: selectShowSnack(state),
  messageSnackBar: selectSnackBarMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleSnackBar: (toggle) => dispatch(toggleSnackBar(toggle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);
