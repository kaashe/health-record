import PageContent from "./PageContent";
import LeftSidebar from "./LeftSidebar";
import ModalLayout from "./ModalLayout";
import { useDispatch, useSelector } from "react-redux";
import { removeNotificationMessage } from "../features/common/headerSlice";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useEffect } from "react";

function Layout() {
  const dispatch = useDispatch()
  const {newNotificationMessage, newNotificationStatus} = useSelector(state => state.header)


  useEffect(() => {
      if(newNotificationMessage !== ""){
          if(newNotificationStatus === 1)NotificationManager.success(newNotificationMessage, 'Success')
          if(newNotificationStatus === 0)NotificationManager.error( newNotificationMessage, 'Error')
          dispatch(removeNotificationMessage())
      }
  }, [newNotificationMessage,dispatch,newNotificationStatus])

  return (
    <>
      { /* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer  lg:drawer-open">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <PageContent />
        {/* <LeftSidebar /> */}
      </div>

      {/** Notification layout container */}
      <NotificationContainer />

      {/* Modal layout container */}
      <ModalLayout />

    </>
  )
}

export default Layout;
