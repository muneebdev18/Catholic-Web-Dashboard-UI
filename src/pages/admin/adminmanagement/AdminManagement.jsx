import DashboardFooter from "../../../components/dashboardFooter/DashboardFooter"
import DashboardHeader from "../../../components/dashboardHeader/DashboardHeader"

const AdminManagement = () => {
  return (
    <div className="w-full flex flex-col min-h-screen relative">
    <DashboardHeader title={"Admin Management"} />
    <div className="flex flex-col flex-grow w-full lg:px-7 lg:py-7 sm:px-8 sm:py-2 xsm:px-0 xsm:py-0 overflow-y-auto"></div>
    <DashboardFooter/>
  </div>
  )
}

export default AdminManagement