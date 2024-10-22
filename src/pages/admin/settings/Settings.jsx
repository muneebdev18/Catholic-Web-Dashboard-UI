import DashboardHeader from "../../../components/dashboardHeader/DashboardHeader"

const Settings = () => {
  return (
    <div className="w-full flex flex-col min-h-screen relative">
      <DashboardHeader title={"Settings"} />
      <div className="flex flex-col flex-grow w-full lg:px-7 lg:py-7 sm:px-8 sm:py-2 xsm:px-0 xsm:py-0 overflow-y-auto"></div>
    </div>
  )
}

export default Settings