import { api } from '..'
export const Profile = (user) => {
    return (
        <div>
            <div className=" p-2 flex flex-row justify-between">
                <div className="flex text-md">
                    <a
                        onclick={() => { window.history.back() }}
                        className="flex flex-row gap-2 hover:cursor-pointer items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 ">
                            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                        </svg>
                        <p>Back</p>
                    </a>
                </div>
                <div
                    className="hover:cursor-pointer"
                    onclick={() => {
                        if (window.location.hash.split('#/profile/')[1] == api.authStore.model.id) {
                            window.location.hash = '#/settings'
                        } else {
                            window.options.showModal()
                        }
                    }}
                    >
                </div>
                •••
            </div>
        </div>  
      
    )
}