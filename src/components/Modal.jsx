import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Modal = ({ isOpen, onClose }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    onClose();
    toast.success("Food Added Successfully");
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Add New Food
                </h3>
                <div className="mt-2">
                  <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-x mb-2">
                      <label>
                        <span className=" text-gray-600 font-semibold">
                          Name
                        </span>
                      </label>
                      <input
                        className="p-3 rounded border border-slate-950 w-full max-w-x my-2"
                        placeholder="Name"
                        type="text"
                        {...register("Name", {
                          required: {
                            value: true,
                            message: "Name is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.Name?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.Name.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div className="form-control w-full max-w-x mb-2">
                      <label>
                        <span className=" text-gray-600 font-semibold">
                          Price
                        </span>
                      </label>
                      <input
                        className="p-3 rounded border border-slate-950 w-full max-w-x my-2"
                        type="number"
                        placeholder="Price"
                        {...register("Price", {
                          required: {
                            value: true,
                            message: "Price is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.Price?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.Price.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div className="form-control w-full max-w-x mb-2">
                      <label>
                        <span className=" text-gray-600 font-semibold">
                          Image
                        </span>
                      </label>
                      <input
                        className="p-3 text-white rounded border border-slate-950 w-full max-w-x my-2"
                        type="file"
                        {...register("ImageUrl", {
                          required: {
                            value: true,
                            message: "Image is Required",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.ImageUrl?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.ImageUrl.message}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="w-full">
                      <input
                        className="bg-blue-500 p-2 rounded  text-white font-semibold cursor-pointer border-0"
                        name="submit"
                        type="submit"
                        value="Add Now"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
