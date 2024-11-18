export const About3 = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 p-8">
            <div className="md:hidden lg:block"></div>
            <div className="">
                <div className="flex items-center space-x-6">
                    <img src="images/firebase.png" className="h-9" alt="logo Moss SAS" />
                    <h3 className="text-lg my-2">Firebase</h3>
                </div>
                <div className="flex items-center space-x-6">
                    <img src="images/mysql.png" className="h-9" alt="logo Moss SAS" />
                    <h3 className="text-lg my-2">MySQL</h3>
                </div>
            </div>

            <div className="">
                <div className="flex items-center space-x-6">
                    <img src="images/tailwind.png" className="h-9" alt="logo Moss SAS" />
                    <h3 className="text-lg my-2">Tailwind CSS</h3>
                </div>
                <div className="flex items-center space-x-6">
                    <img src="images/kendo.png" className="h-9" alt="logo Moss SAS" />
                    <h3 className="text-lg my-2">Kendo UI</h3>
                </div>
            </div>
        </div>
    )
}