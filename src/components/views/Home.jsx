import { useEffect, useState } from "react"
import CreateProject from "../CreateProject"
import Motto from "../Motto"
import Projectss from "../Projectss"
import { loadProjects } from "../../services/blockchain"
import { useGlobalState } from "../../Store"

const Home = () => {
  const [projects] = useGlobalState('projects')
  const [loaded, setLoaded] = useState(false)
  useEffect(async () => {
    await loadProjects()
    setLoaded(true)
  }, [])
  return loaded ? (
    <div>
        <Motto />
        <Projectss projects={projects} />
        <CreateProject/>
        
    </div>
  ) : null
}

export default Home