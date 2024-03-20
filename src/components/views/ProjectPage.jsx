import ProjectBackers from "../ProjectBackers"
import { ProjectDetails } from "../ProjectDetails"
import UpdateProject from "../updateProject"
import BackProject from "../backProject"
import { useEffect, useState } from "react"
import { loadBackers, loadProject } from "../../services/blockchain"
import { useParams } from "react-router-dom"
import { useGlobalState } from "../../Store"

const ProjectPage = () => {
  const [loaded, setLoaded] = useState(false)
  const [backers] = useGlobalState('projectBackers')
  const {id} = useParams()
  
  const [project] = useGlobalState('project')
  

  useEffect(async () => {
    await loadProject(id)
    await loadBackers(id)
    setLoaded(true)
  }, [])
  return loaded ? (
    
    <>
      <ProjectDetails project={project}/>
      <ProjectBackers backers={backers} />
      <UpdateProject/>
      <BackProject project={project}/>
    </>
    
  ) : null
}

export default ProjectPage