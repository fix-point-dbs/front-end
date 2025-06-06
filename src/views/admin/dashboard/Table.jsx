import React from "react";

export default function Table() {
    return (
        <div className="w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-3 sm:p-4 md:p-6">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">Product name</th>
                            <th scope="col" className="px-4 py-3">Color</th>
                            <th scope="col" className="px-4 py-3">Category</th>
                            <th scope="col" className="px-4 py-3">Price</th>
                            <th scope="col" className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple MacBook Pro 17"</th>
                            <td className="px-4 py-3">Silver</td>
                            <td className="px-4 py-3">Laptop</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Microsoft Surface Pro</th>
                            <td className="px-4 py-3">White</td>
                            <td className="px-4 py-3">Laptop PC</td>
                            <td className="px-4 py-3">$1999</td>
                            <td className="px-4 py-3">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Magic Mouse 2</th>
                            <td className="px-4 py-3">Black</td>
                            <td className="px-4 py-3">Accessories</td>
                            <td className="px-4 py-3">$99</td>
                            <td className="px-4 py-3">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Google Pixel Phone</th>
                            <td className="px-4 py-3">Gray</td>
                            <td className="px-4 py-3">Phone</td>
                            <td className="px-4 py-3">$799</td>
                            <td className="px-4 py-3">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Watch 5</th>
                            <td className="px-4 py-3">Red</td>
                            <td className="px-4 py-3">Wearables</td>
                            <td className="px-4 py-3">$999</td>
                            <td className="px-4 py-3">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
