import { useEffect } from "react"
import CreateProject from "../CreateProject"
import Motto from "../Motto"
import Projectss from "../Projectss"
import { loadProjects } from "../../services/blockchain"
import { useGlobalState } from "../../Store"

const Home = () => {
  const [projects] = useGlobalState('projects')

  useEffect(async () => {
    await loadProjects()
  }, [])
  return (
    <div>
        <Motto />
        <Projectss projects={projects} />
        <CreateProject/>
        
    </div>
  )
}

export default Home