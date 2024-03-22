import Moment from "react-moment"

const ProjectBackers = ( {backers}) => {
    console.log(backers)
  return (
    <div className="flex flex-col justify-center w-full ">
        <div className="max-h-[calc(100vh_-_20rem)] overflow-y-auto
        shadow-md rounded-md w-full">
            <table className="min-w-full">
                <thead className="border-b">
                    <tr className="border-b border-gray-200">
                        <th scope="col"
                        className="text-left">
                            Backer
                        </th>
                        <th scope="col"
                        className="text-left">
                            Donation
                        </th>
                        <th scope="col"
                        className="text-left">
                            Refunded
                        </th>
                        <th scope="col"
                        className="text-left">
                            Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { backers.map((backer, i) => {
                        return <Backer key={i} backer={backer} />
                    })}
                </tbody>
            </table>

        </div>
    </div>
  )
}
const Backer = ( {backer } ) => (
    <tr className="border-b border-gray-400">
        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
            <div>
                <span>{backer.owner.slice(0,6)+ '...'+ backer.owner.slice(38, 42)}</span>
            </div>

        </td>
        <td>
            <small>{backer.contribution} ETH</small>
        </td>
        <td>
            {backer.refunded ? 'Yes' : 'No'}
        </td>
        <td>
            <Moment fromNow>{backer.timestamp}</Moment>
        </td>
    </tr>
)    

export default ProjectBackers