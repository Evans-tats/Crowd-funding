const ProjectBackers = () => {
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
                    {Array(6).fill().map((backing, i) => (
                        <tr key={i} className="border-b border-gray-200"> 
                        <td className="text-sm font-light py-4">
                            03xf..2f6d{i}
                        </td>
                        <td className="text-sm font-light">
                            Data
                        </td>
                        <td className="text-sm font-light"> 
                            {false ? 'Yes' : 'No'}
                        </td>
                        <td className="text-sm font-light">
                            {new Date().getTime()}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default ProjectBackers