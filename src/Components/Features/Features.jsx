import React from 'react';
// import branch from 'src/'

const Features = () => {
    return (
        <div className="mx-auto my-8 flex w-[80%] flex-wrap items-center justify-between gap-8">
            {/* feature card */}
            <div className="flex w-[500px]  max-w-[600px] items-center gap-x-4 px-4 py-4 ">
                {/* feature img  */}
                <div>
                    <img src="/branch.png" height={80} width={80} alt="" />
                </div>
                {/* feature title  */}
                <div className="flex  flex-col justify-center gap-y-2">
                    <div className="flex font-semibold">Using Abstract</div>
                    <p className="text-sm">
                        Abstract lets you manage, version, and document your
                        designs in one place
                    </p>
                    <a className="text-blue no-underline hover:underline">
                        Learn More
                    </a>
                </div>
            </div>

            {/* feature card */}
            <div className="flex w-[500px] max-w-[500px] items-center gap-x-4 px-4 py-4 ">
                {/* feature img  */}
                <div>
                    <img src="/friends.png" height={80} width={80} alt="" />
                </div>
                {/* feature title  */}
                <div className="flex  flex-col justify-center gap-y-2">
                    <div className="flex font-semibold">
                        Manage your account
                    </div>
                    <p className="text-sm">
                        Configure your account settings, such as your email,
                        profile details, and password.
                    </p>
                    <a className="text-blue no-underline hover:underline">
                        Learn More
                    </a>
                </div>
            </div>

            {/* feature card */}
            <div className="flex w-[500px] max-w-[500px] items-center gap-x-4 px-4 py-4 ">
                {/* feature img  */}
                <div>
                    <img src="/puzzle.png" height={80} width={80} alt="" />
                </div>
                {/* feature title  */}
                <div className="flex  flex-col justify-center gap-y-2">
                    <div className="flex font-semibold">
                        Manage organizations, teams, and projects
                    </div>
                    <p className="text-sm">
                        Use Abstract organizations, teams, and projects to
                        organize your people and your work.
                    </p>
                    <a className="text-blue no-underline hover:underline">
                        Learn More
                    </a>
                </div>
            </div>

            {/* feature card */}
            <div className="flex w-[500px] max-w-[500px] items-center gap-x-4 px-4 py-4 ">
                {/* feature img  */}
                <div>
                    <img src="/dollar.png" height={80} width={80} alt="" />
                </div>
                {/* feature title  */}
                <div className="flex  flex-col justify-center gap-y-2">
                    <div className="flex font-semibold">Manage billing</div>
                    <p className="text-sm">
                        Change subscriptions and payment details.
                    </p>
                    <a className="text-blue no-underline hover:underline">
                        Learn More
                    </a>
                </div>
            </div>

            {/* feature card */}
            <div className="flex w-[500px] max-w-[500px] items-center gap-x-4 px-4 py-4 ">
                {/* feature img  */}
                <div>
                    <img src="/key.png" height={80} width={80} alt="" />
                </div>
                {/* feature title  */}
                <div className="flex  flex-col justify-center gap-y-2">
                    <div className="flex font-semibold">
                        Authenticate to Abstract
                    </div>
                    <p className="text-sm">
                        Set up and configure SSO, SCIM, and Just-in-Time
                        provisioning.
                    </p>
                    <a className="text-blue no-underline hover:underline">
                        Learn More
                    </a>
                </div>
            </div>

            {/* feature card */}
            <div className="flex w-[500px] max-w-[500px] items-center gap-x-4 px-4 py-4 ">
                {/* feature img  */}
                <div>
                    <img src="/chat.png" height={80} width={80} alt="" />
                </div>
                {/* feature title  */}
                <div className="flex  flex-col justify-center gap-y-2">
                    <div className="flex font-semibold">Abstract support</div>
                    <p className="text-sm">Get in touch with a human.</p>
                    <a className="text-blue no-underline hover:underline">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Features;
