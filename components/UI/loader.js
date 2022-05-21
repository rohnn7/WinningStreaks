import classes from './loader.module.css'

function Loader()
{
    return(
        <div className={classes.rippleLoader}>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader;