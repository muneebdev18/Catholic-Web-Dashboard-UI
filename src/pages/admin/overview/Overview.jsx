import DashboardFooter from "../../../components/dashboardFooter/DashboardFooter"
import DashboardHeader from "../../../components/dashboardHeader/DashboardHeader"

const Overview = () => {
  return (
    <div className="w-full flex flex-col min-h-screen relative">
      <DashboardHeader title={"Dashboard Overview"} />
      <div className="flex  flex-col flex-grow w-full lg:px-7 lg:py-7 sm:px-8 sm:py-2 xsm:px-0 xsm:py-0 overflow-y-auto">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus porro animi debitis ratione nisi, rerum reiciendis ea esse assumenda sapiente earum saepe nostrum doloremque, temporibus tempore aliquam a? Sint, quibusdam.</p>
       
      </div>
      <DashboardFooter/>
    </div>
  )
}

export default Overview