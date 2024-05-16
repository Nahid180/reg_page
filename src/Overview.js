export function Overview(Alldata) {
    
    return (
        <>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Overview</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['phone']}</h2>
                    
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Phone
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['phone']}</h2>                    
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Email
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['email']}</h2>                    
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                        NID/Date of Birth
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['nid']}</h2>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                        School
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['school']}</h2>
                
    
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Class
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['current_class']}</h2>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Division
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['division']}</h2>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Reference
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['reference']}</h2>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Father's Name
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['fathers_name']}</h2>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Father's Phone No.
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['fathers_phone']}</h2>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                        Mother's Name
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['mothers_name']}</h2>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="fathers_name" className="block text-sm font-medium leading-6 text-gray-900">
                    Mother's Phone No.
                    </label>
                    <h2 className="my-1.5">{Alldata['Alldata']['mothers_phone']}</h2>
                </div>
                
            </div>
        </>
    )
}