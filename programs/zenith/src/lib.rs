use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token::{Mint, Token, TokenAccount, Transfer},
};
declare_id!("5YQoa9UaxaYXzCZpadpx8WMkTTBsF2d9cQcz9uAMHfLM");

#[program]
pub mod zenith {
    use super::*;
    

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
