import classes from './download.module.css'
import { FaWindows, FaApple, FaLinux, FaAndroid, FaArrowRight } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { connect } from "react-redux"
import * as Actions from '../../redux/action/mainActions'
import {Blog} from '../../mainServer'
import { useRouter } from 'next/dist/client/router';

function Download(props)
{
    var [switchScreen, setSwitchScreen] = useState(true)
    const router = useRouter()

    const onDownload = (file)=>{
        /*Uncomment this */
        // props.onSetFile(file)
        // props.onSetRedirect(props.from)
        // router.push('/login')

        /*Comment this */
        if(file){
            let a = document.createElement('a');
            a.href = Blog+'/Download/'+file;
            a.download = file;
            a.click();
        }
        // var blob = new Blob(Blog+'Download/WSWindow.rar')
        // let url = window.URL.createObjectURL(blob);

    }

    /* Uncomment this */
    // useEffect(()=>{
    //     if(props.otp>0){
    //         if(props.file){
    //             let a = document.createElement('a');
    //             a.href = Blog+'/Download/'+props.file;
    //             a.download = props.file;
    //             a.click();
    //             props.onSetFile(null)
    //             props.onSetOTP(null)
    
    //         }
    //     }
    // }, [])

    const onDownloadDataFile =()=>{
        let a = document.createElement('a');
        a.href = Blog+'/Download/ConnectorInstaller.msi';
        a.download = 'ConnectorInstaller.msi';
        a.click();
    }

    const pc=(
        <>
                <button className={classes.choiceButton} onClick={()=>onDownload('WSWindows.exe')} >
                    {/* <a href={Blog+'/Download/WSWindow.rar'} download > */}
                        <FaWindows className={classes.choiceButtonIcon} />
                        <br/>
                        Windows Installer
                    {/* </a> */}
                </button>
                <button className={classes.choiceButton} onClick={()=>onDownload('WSMac.app.zip')} disabled={false} >
                    <FaApple className={classes.choiceButtonIcon} />
                    <br/>
                    macOS Installer
                </button>
                <button className={classes.choiceButton} onClick={()=>onDownload('WSLinux.zip')} disabled={false}>
                    <FaLinux className={classes.choiceButtonIcon} />
                    <br/>
                    Linux Installer
                </button>
        </>
    )

    const mobile = (
        <>
                <button className={classes.choiceButton} onClick={()=>onDownload('WSWindows.exe')} disabled={true}>
                    <FaAndroid className={classes.choiceButtonIcon} />
                    <br/>
                    Android Installer
                </button>
                <button className={classes.choiceButton} onClick={()=>onDownload('WSWindows.exe')}  disabled={true}>
                    <FaApple className={classes.choiceButtonIcon} />
                    <br/>
                    IOS Installer
                </button>
                
        </>
    ) 

    const switchToPc=()=>{
        setSwitchScreen(true)
    }

    const SwitchToMobile=()=>{
        setSwitchScreen(false)
    }

    return(
        <>
        <div className={classes.downloadArea}  id='download'>
            <h1 className={classes.downloadHead} > Download </h1>
            <p className={classes.downloadText} >Download our software, <b>Flow</b>, to run on your local device and start earning today.   
            </p>
        </div>
        <div className={classes.downloadContainer} >
            <div className={classes.downloadButtonContainer} >
                <button onClick={switchToPc} className={switchScreen? `${classes.downloadPcSwitch} ${classes.active} `:`${classes.downloadPcSwitch}`} >
                    PC
                </button>
                <button onClick={SwitchToMobile} className={switchScreen? `${classes.downloadMobileSwitch}`:`${classes.downloadMobileSwitch} ${classes.active} `} >
                    Mobile
                </button>
            </div>
            <div className={classes.choiceContainer} >
                {switchScreen ?pc:mobile}
            </div>
        </div>
        <div className={classes.dataButton} >
            <button className={classes.accordionButton}  onClick={onDownloadDataFile} >Connector for your own <b>Data Source</b> </button>
        </div>
        <p className={classes.note} ><i><b>*Note</b>: If you are having virus error while downloading on window machine <Link href='/blog/Remove the virus error occurring while downloading flow in windows machine' >check this blog</Link>  </i> </p>
        <p className={classes.note} ><i><b>**Note</b>: Connector is used to connect the data to the software from the various sources i) Excel ii) Broker terminal iii) Meta trader iV) Global data feed. For configuring connector <Link href='/blog/What are data gateways or connectors' >check this blog</Link>  </i> </p>
        </>

    )
}

const mapStateToProps=state=>{
    return{
        redirect: state.main.redirect,
        otp: state.main.otp,
        file: state.main.file
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        onSetRedirect:(redirect)=>dispatch(Actions.setRedirect(redirect)),
        onSetOTP: otp=>dispatch(Actions.setOtp(otp)),
        onSetFile:file=>dispatch(Actions.setFile(file))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Download);