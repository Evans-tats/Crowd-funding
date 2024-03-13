import ProjectBackers from "../ProjectBackers"
import { ProjectDetails } from "../ProjectDetails"
import UpdateProject from "../updateProject"
import BackProject from "../backProject"
const ProjectPage = () => {
  return (
    <>
      <ProjectDetails />
      <ProjectBackers />
      <UpdateProject/>
      <BackProject/>
    </>
    
  )
}

export default ProjectPage