import ProjectBackers from "../ProjectBackers"
import { ProjectDetails } from "../ProjectDetails"
import UpdateProject from "../updateProject"
import BackProject from "../backProject"
import { useEffect, useState } from "react"
import { loadProject } from "../../services/blockchain"
import { useParams } from "react-router-dom"
import { useGlobalState } from "../../Store"

const ProjectPage = () => {
  const [loaded, setLoaded] = useState(false)
  const {id} = useParams()
  
  const [project] = useGlobalState('project')
  

  useEffect(async () => {
    await loadProject(id)
    setLoaded(true)
  }, [])
  return loaded ? (
    
    <>
      <ProjectDetails project={project}/>
      <ProjectBackers />
      <UpdateProject/>
      <BackProject/>
    </>
    
  ) : null
}

export default ProjectPage