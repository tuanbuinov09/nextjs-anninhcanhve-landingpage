const FooterContactForm = () => (
  <div className="bg-transparent mb-4">
    <form
      className=""
      onSubmit={(_e) => {
        // eslint-disable-next-line no-alert
        alert('test gửi mail');
        _e.preventDefault();
      }}
    >
      <div className="mb-4">
        {/* <label
          className="block text-gray-100 text-sm font-bold mb-2"
          htmlFor="fullname"
        >
          Họ tên:
        </label> */}
        <input
          className="border border-gray-100 appearance-none w-full py-1 px-3 text-gray-700 leading-tight text-sm "
          id="fullname"
          type="text"
          placeholder="Họ tên.."
        />
      </div>
      <div className="mb-4">
        {/* <label
          className="block text-gray-100 text-sm font-bold mb-2"
          htmlFor="phonenumber"
        >
          Số điện thoại:
        </label> */}
        <input
          className="border border-gray-100 appearance-none w-full py-1 px-3 text-gray-700 leading-tight text-sm "
          id="phonenumber"
          type="text"
          placeholder="Số điện thoại.."
        />
      </div>
      <div className="mb-4">
        <input
          className="border border-gray-100 appearance-none w-full py-1 px-3 text-gray-700 leading-tight text-sm "
          id="email"
          type="email"
          placeholder="Email.."
        />
      </div>
      <div className="mb-4 w-full">
        {/* <label
          className="block text-gray-100 text-sm font-bold mb-2"
          htmlFor="content"
        >
          Nội dung:
        </label> */}
        <textarea
          className="border border-gray-100 appearance-none w-full py-1 px-3 text-gray-700 leading-tight text-sm transition-all h-16"
          id="content"
          placeholder="Nội dung tin nhắn.."
        />
      </div>
      <div className="flex items-center justify-start">
        <button
          className="bg-blue-500 hover:opacity-80 text-white font-bold py-1 px-3 focus:outline-none transition-all text-sm mb-3 mr-3"
          type="submit"
        >
          GỬI
        </button>
        <button
          className="bg-gray-500 hover:opacity-80 text-white font-bold py-1 px-3 focus:outline-none transition-all text-sm mb-3"
          type="button"
        >
          NHẬP LẠI
        </button>
      </div>
    </form>
  </div>
);

export { FooterContactForm };
