import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken('0xC35cF5521aD17794f113E64eF131685cfd4376A4')

const revokeRoles = async ()=>{
    try {
        const allRoles = await token.roles.getAll()
        console.log('Roles that exist right now',allRoles);

        await token.roles.setAll({admin:[], minter:[]});
        console.log('Roles revoked', await token.roles.getAll());
        console.log('✅ Successfully revoked roles');
    } catch (error) {
        console.log('failed to revoke roles', error);
    }
}
revokeRoles();