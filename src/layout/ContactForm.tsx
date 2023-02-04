const ContactForm = () => (
  <div className="bg-white pt-4 mb-4">
    {/* <form action="/sendmail">
      <div className="input-group">
        <label className="block mb-2">Họ tên:</label>
        <input
          className="px-8 py-6"
          type={'text'}
          name={'fullname'}
          placeholder="Vui lòng nhập họ tên.."
          required
        />
      </div>
      <div className="input-group">
        <label className="block mb-2">Số điện thoại:</label>
        <input
          className="px-8 py-6"
          type={'text'}
          name={'phonenumber'}
          placeholder="Vui lòng nhập số điện thoại.."
          required
        />
      </div>
      <div className="input-group">
        <label className="block mb-2">Nội dung:</label>
        <textarea
          className="px-8 py-6"
          type={'text'}
          name={'content'}
          placeholder="Vui lòng nhập nội dung liên hệ.."
          required
        />
      </div>
      
    </form> */}
    <form
      className=""
      onSubmit={(_e) => {
        // eslint-disable-next-line no-alert
        alert('test gửi mail');
        _e.preventDefault();
      }}
    >
      <div className="flex flex-wrap">
        <div className="mb-4 w-1/2 pr-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullname"
          >
            Họ tên:
          </label>
          <input
            className="border border-gray-300 appearance-none w-full py-3 px-3 text-gray-700 leading-tight "
            id="fullname"
            type="text"
            placeholder="Vui lòng nhập họ tên.."
          />
        </div>
        <div className="mb-4 w-1/2 pl-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phonenumber"
          >
            Số điện thoại:
          </label>
          <input
            className="border border-gray-300 appearance-none w-full py-3 px-3 text-gray-700 leading-tight "
            id="phonenumber"
            type="text"
            placeholder="Vui lòng nhập số điện thoại.."
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Email:
          </label>
          <input
            className="border border-gray-300 appearance-none w-full py-3 px-3 text-gray-700 leading-tight "
            id="email"
            type="email"
            placeholder="Vui lòng nhập email.."
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Nội dung:
          </label>
          <textarea
            className="border border-gray-300 appearance-none w-full py-3 px-3 text-gray-700 leading-tight transition-all h-28"
            id="content"
            placeholder="Vui lòng nhập nội dung liên hệ.."
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:opacity-80 text-white font-bold py-2 px-3 focus:outline-none transition-all mb-3"
          type="submit"
        >
          GỬI
        </button>
      </div>
    </form>
  </div>
);

export { ContactForm };
