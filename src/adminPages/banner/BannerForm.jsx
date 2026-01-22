import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constant";

function BannerForm() {
    const navigate = useNavigate()
    const token=localStorage.getItem("token")
    const [formData, setFormData] = useState({
        title: "",
        quote: "",
        description: "",
        product: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(`${BASE_URL}/banner`,
                formData,

                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            )

            toast.success(response?.data?.message)
            navigate(-1)


        } catch (err) {
            toast.error("banner creation failed")
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md ">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Create Banner
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Furniture for new year"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Quote */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Quote
                    </label>
                    <input
                        type="text"
                        name="quote"
                        placeholder="Best Furniture deal"
                        value={formData.quote}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Description
                    </label>
                    <textarea
                        name="description"
                        rows="4"
                        placeholder="Enter banner description..."
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Product ID */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Product ID
                    </label>
                    <input
                        type="text"
                        name="product"
                        placeholder="6971e41d9f0eb4716f0e5ff5"
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Save Banner
                </button>
            </form>
        </div>
    );
}

export default BannerForm;
