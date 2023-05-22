/* eslint-disable max-len*/

export default {
    locale: {
        current_language_name: 'Português',
    },
    pages: {
        staking: {
            note_unstaking_period: 'Lembre-se que há um período de retirada de {period}',
            claim_tlos: 'Resgatar TLOS',
            add_stlos_to_metamask: 'Iniciar interação com o MetaMask para adicionar sTLOS',
            metamask_fox_logo: 'Logotipo de raposa do MetaMask',
            cancel: 'Cancelar',
            stake_tlos_confirm: 'Continuar significa aplicar TLOS em troca de sTLOS. ' +
            'sTLOS podem ser resgatados por TLOS a qualquer momento usando a aba Desaplicar.',
            stake_tlos_confirm_2a: 'Depois que desaplicar os TLOS, eles ficarão bloqueados por um período de', /* unstakePeriodPretty...*/
            stake_tlos_confirm_2b: /*...unstakePeriodPretty */ 'depois disso, podem ser retirados da sua conta na aba Resgatar.',
            stake_tlos_confirm_3: 'Deseja continuar?',
            stake_tlos: 'Aplicar TLOS',
            stake_tlos_subheader: 'Aplicar seus TLOS por sTLOS te dá acesso a uma renda estável e várias aplicações DeFi, ' +
            'aumentando ainda mais a rentabilidade. Conforme o tamanho da pool de recompensas aumenta, a taxa de conversão de TLOS para sTLOS mudará ' +
            'com o tempo. Portanto, a quantidade de sTLOS recebida é menor que a quantidade de TLOS aplicada. As recompensas se ' +
            'auto-compensarão. Não é necessária nenhuma ação adicional.',
            receive_stlos: 'Receber sTLOS',
            available: '{balanceTlos} Disponível',
            insufficient_tlos_balance: 'Saldo de TLOS insuficiente para aplicar',
            login_using_an_evm_wallet: 'Logar usando uma carteira EVM',
            wallet_not_connected: 'Carteira não conectada',
            click_to_input_full_wallet_balance: 'Clique para inserir o saldo completo de sua carteira\n\n' +
            'O saldo mostrado é reduzido em 1 TLOS para manter sua conta operacional.\n' +
            'Saldo exato (menos as tarifas de gás aproximadas):\n' +
            '{prettyBalance} TLOS',
            loading: 'Carregando...',
            get_more_tlos: 'Obter mais TLOS',
            connect_wallet: 'Conectar carteira',
            minutes: 'minutos',
            hours: 'horas',
            days: 'dias',
            unstake: 'Desaplicar',
            stake: 'Aplicar',
            withdraw: 'Retirar',
            telos_evm_staking: 'Aplicação de TLOS em EVM',
            stake_tlos_earn_interest: 'Aplicar TLOS em sTLOS para ganhar juros do pool de recompensas por aplicação',
            staked: 'Aplicado',
            unstaked: 'Desaplicado',
            tooltip_1: 'RPA: Rendimento Percentual Anual (APY em inglês)\n\nA taxa de retorno anual depois de receber o juros composto na conta.\n\n' +
            'Os juros são compostos aproximadamente a cada 30 minutos. A taxa percentual não é fixa, o que significa que ' +
            'mudará ao longo do tempo com a quantidade total de TLOS aplicados em Telos EVM e Telos Native. ' +
            'As recompensas são pagas de um pool de recompensas da comunidade para o contrato sTLOS.',
            tooltip_2: 'VTB: Valor Total Bloqueado (TVL em inglês)\n\nO valor atual, em TLOS, de todos os ativos mantidos no sTLOS ' +
            '(Staked TLOS, que significa TLOS aplicados em inglês), ou seja, a soma de todos os TLOS aplicados no Telos EVM neste momento.',
            tooltip_3: 'Aplicado\n\n' +
            'O montante total aplicado associado com a conta logada, ou seja, ' +
            'seu saldo de tokens sTLOS, junto com seu valor em TLOS',
            tooltip_4: 'Desaplicado\n\n' +
            'O valor total de TLOS desaplicados que você tem, tanto bloqueados quanto desbloqueados.\n\n' +
            'Quando você desaplica\u2014ou seja, resgata\u2014parte do valor em sTLOS, a quantidade equivalente de ' +
            'TLOS permanece como garantia ("bloqueado") por {unlockPeriod}; durante este tempo, ' +
            'não é possível interagir com esta quantidade de TLOS.\n\n' +
            'Depois de decorrido o período de desbloqueio, você pode reivindicar seu TLOS disponível na aba Resgatar ' +
            'nesta página. O valor resgatado será adicionado ao saldo TLOS da sua conta.',
            confirm_unstake_1a: 'Ao continuar, você resgatará sTLOS em troca de TLOS. ' +
            'O TLOS não aplicado permanecerá bloqueado por um período de', /* unstakePeriodPretty...*/
            confirm_unstake_1b: /*...unstakePeriodPretty */ 'após o qual pode ser transferido para sua conta na aba Resgatar',
            confirm_unstake_2a: 'Atenção, você já pode desaplicar ', /* remainingDeposits...*/
            confirm_unstake_2b: /*...remainingDeposits */ 'mais vezes antes ' +
            'de atingir o máximo de ações simultâneas de desaplicação. Quando atingir o máximo, você precisará resgatar ' +
            'TLOS desbloqueado para continuar desaplicando. Se você não tiver nenhum TLOS resgatável nesse momento, você deve ' +
            'aguardar até que a duração do bloqueio acabe, antes de resgatar o TLOS desbloqueado e desaplicar mais sTLOS. -',
            unstake_stlos_for_tlos: 'Desaplicar sTLOS em troca de TLOS',
            unstake_stlos: 'Desaplicar sTLOS',
            receive_tlos: 'Receber TLOS',
            amount: 'Montante',
            time_remaining: 'Tempo restante',
            full_staked_balance_tooltip: 'Clique para inserir o saldo total aplicado\n\n' +
            'Saldo exato (menos as tarifas de gás aproximadas):\n' +
            '{prettyBalance} sTLOS',
            login_using_evm_wallet: 'Logar usando uma carteira EVM',
            max_unstake_transactions_reached: 'Você atingiu o número máximo de transações de desaplicação pendentes, ' +
            'por favor, resgate o TLOS disponível ou aguarde que o TLOS  desaplicado ainda pendente se torne resgatável antes de fazer outro depósito.',
            click_to_change_time_format: 'Clique para mudar o formato de hora',
            unstaking: 'Desaplicando',
            available_to_withdraw: 'Disponível para retirar',
            withdraw_tlos: 'Retirar TLOS',
            withdraw_successful: 'Retirada bem-sucedida! Ver transação:',
            no_withdrawable_positions: 'Não há posições disponíveis para retirar',
            you_have_unlocked_tlos: 'Você desbloqueou TLOS!',
            stake_tlos_success: 'Aplicação bem-sucedida! Ver transação:',
            unstake_stlos_success: 'Desaplicação bem-sucedida! Ver transação:',
            deposit_failed: 'Falha ao depositar TLOS: { message }',
            redeem_failed: 'Não foi possível converter STLOS em TLOS: { message }',
            fetch_balance_error: 'Falha ao buscar conta: { message }',
            fetch_stlos_balance_error: 'Falha ao buscar saldo de STLOS da conta: { message }',
            fetch_stlos_value_error: 'Falha ao buscar valor do saldo de STLOS da conta: { message }',
            fetch_unstaked_balance_error: 'Falha ao buscar saldo total de TLOS não aplicado: { message }',
            fetch_unlocked_balance_error: 'Falha ao buscar saldo de STLOS desbloqueado: { message }',
            fetch_escrow_deposits_error: 'Falha ao buscar depósitos em garantia: { message }',
            fetch_conversion_rate_error: 'Falha ao buscar taxa de conversão TLOS->sTLOS: { message }',
            fetch_stlos_contract_error: 'Falha ao obter contrato STLOS: { message }',
            fetch_escrow_contract_error: 'Falha ao obter contrato STLOS: { message }',
            fetch_unstake_period_error: 'Falha ao recuperar período de desaplicação: { message }',
            fetch_account_error: 'Falha ao buscar conta: { message }',
            fetch_stlos_tvl_error: 'Falha ao buscar TVL de sTLOS: { message }',
            fetch_stlos_apy_error: 'Falha ao buscar APY de sTLOS: { message }',
            fetch_max_deposits_error: 'Falha ao buscar depósitos máximos do contrato de garantia { message }',
            convert_tlos_to_stlos_error: 'Não foi possível converter TLOS em STLOS { message }',
            convert_stlos_to_tlos_error: 'Não foi possível converter STLOS em TLOS { message }',
            unstake_stlos_error: 'Falha ao desaplicar sTLOS { message }',
            withdraw_failed: 'Falha ao retirar TLOS desbloqueado: { message }',
        },
        account_not_found: 'We could not find this account',
        approvals: 'Approvals',
        supported_interfaces: 'Supported interface(s)',
        explore_transactions: 'Explorar transações',
        recent_transactions: 'Transações recentes',
        telos_evm_explorer: 'Explorador Telos EVM',
        rpc_endpoints: 'Endpoints RPC',
        monitor: 'Monitor',
        oops: 'Ops! Nada por aqui...',
        go_home: 'Ver Início',
        minted: 'Minted',
        holders: 'Holders',
        evm_holders: 'All Telos EVM holders',
        total_nfts_minted: 'Total NFTs minted in this collection',
        telos_supply: 'Telos EVM supply',
        select_sol_file: 'Selecione o arquivo de contrato .sol para carregar',
        select_json_file: 'Selecione o arquivo de objeto de entrada JSON convencional para carregar',
        paste_contract_contents: 'você deve selecionar um arquivo para carrregar ou alternar a entrada para colar conteúdos do contrato',
        contract_address: 'Endereço do contrato',
        enter_contract_address: 'Por favor digite o endereço do contrato \'0x0123...\'',
        invalid_address_format: 'formato de endereço inválido',
        compiler_version: 'Versão do compilador',
        select_compiler_version: 'selecione a versão do compilador',
        eg_contracts: 'por exemplo, \'contratos/\'',
        contract_file_directory_path: 'Caminho do diretório do(s) arquivo(s) do contrato (deixe em branco se não houver nenhum)',
        invalid_path_format: 'O caminho deve terminar com uma barra inclinada /',
        upload_file: 'carregar arquivo',
        text_input: 'entrada de texto',
        runs_value_for_optimization: 'Valor de execuções para otimização',
        constructor_arguments: 'Argumentos do construtor',
        comma_seperated_values: 'valores separados por vírgula, por exemplo, Bob,123,0x12345...',
        no_trailing_commas: 'sem vírgulas finais',
        paste_contract_code_here: 'copie e cole o código do contrato aqui...',
        enter_contract_text: 'digite ou cole o texto do contrato',
        verify_contract: 'Verificar contrato',
        reset: 'Reiniciar',
        gas_used: 'Gás usado',
        transactions: 'Transações',
        account: 'Conta',
        contract: 'Contrato',
        transfers_title: 'Transferências { type }',
        erc20_transfers: 'Transferências ERC20',
        erc721_transfers: 'Transferências ERC721',
        erc1155_transfers: 'Transferências ERC1155',
        tokens: 'Tokens',
        created_at_trx: 'Criada na TRX',
        by_address: 'Por endereço',
        number_used_once: 'Número usado uma vez (nonce)',
        native_account: 'Conta nativa',
        balance: 'Saldo',
        view_source_prompt: 'Este contrato foi verificado. Você pode ver o código-fonte e os metadados na guia \'contrato\'',
        account_url: '{ domain }/account/{ account }',
        tlos_balance: '{ balance } TLOS',
        couldnt_retreive_metadata_for_address: 'Não foi possível recuperar os metadados para { address }: { message }',
        transaction_details: 'Detalhes da transação',
        transaction_not_found: 'Não encontrado: { hash }',
        general: 'Geral',
        details: 'Detalhes',
        logs: 'Logs',
        internal_txns: 'Transações internas',
        transaction_hash: 'Hash da transação',
        click_to_change_date_format: 'Clique para alterar o formato da data',
        block_number: 'Número do bloco',
        from: 'De',
        to: 'Para',
        date: 'Data',
        success: 'Sucesso',
        failure: 'Falha',
        status: 'Status',
        balance_gwei: '{ amount } GWEI',
        balance_tlos: '{ amount } TLOS',
        error_message: 'Mensagem de erro',
        contract_function: 'Função do contrato',
        function_parameters: 'Parâmetros da função',
        deployed_contract: 'Contrato implantado',
        click_to_show_in_wei: 'Clique para mostrar em wei',
        gas_price_charged: 'Preço do gás cobrado',
        gas_fee: 'Taxa de gás',
        gas_limit: 'Limite de gás',
        nonce: 'Nonce',
        input: 'Entrada',
        output: 'Saída',
        value: 'Valor',
    },
    components: {
        approvals: {
            login_account: 'Please log into this account using your wallet to be able to see its approvals.',
            approval_text: 'A signature from your wallet is needed to update the selected approvals\' amount to 0.',
            type: 'Type',
            delete: 'Delete',
            delete_all: 'Delete all',
            unselect_all: 'Unselect all',
            cancel: 'Cancel',
            remove_approval: 'Remove it',
            removal_approval: 'Remove single approval',
            unselect_all_approvals: 'Unselect all approvals',
            infinite: 'Infinite',
            select: 'Select approval',
            unselect: 'Unselect approval',
            update: 'Approval Update',
            update_description: 'Enter the new amount to allow for the spender. This will require a wallet signature.',
            removal_approvals: 'Remove all approvals',
            removal_selected_approvals: 'Remove all selected approvals',
            update_failed: 'Failed to update approval',
            update_success: 'Approval to {spender} for {contract} was successfully updated',
            spender: 'Spender',
            amount: 'Allowance',
        },
        nfts : {
            show_without_metadata: 'Show NFTs with no metadata',
            id: 'Token ID',
            name: 'Name',
            collection: 'Collection',
            nfts: 'NFTs',
            metadata: 'Meta',
            minter: 'Minter',
            owner: 'Owner',
            contract: 'Contract',
            image: 'Image',
            media: 'Media',
            minted: 'Block minted',
            attributes: 'attribute',
            ipfs: 'Get from IPFS',
            consult_metadata: 'Consult metadata',
            consult_media: 'Consult media',
            consult_collection: 'Consult collection',
        },
        holders : {
            show_system_contracts: 'Show system contracts',
            holder: 'Holder',
            balance: 'Balance',
            global_supply: 'Global supply',
            telos_supply: 'Telos EVM supply',
            updated: 'Last updated',
        },
        known_tokens: 'Known tokens',
        other_tokens: 'Unknown tokens',
        no_balances_found: 'No erc20 token balance was found for this address',
        internal_txns: 'Transações internas',
        n_internal_txns: '{ amount } transações internas',
        none: 'Nenhum',
        verify_prompt: 'Este contrato ainda não foi verificado. Você gostaria de carregar o(s) contrato(s) e os metadados para verificar o código-fonte agora?',
        verify_contract: 'Verificar contrato',
        search_evm_address_failed: 'A busca pelo endereço EVM vinculado à conta nativa { accountName } falhou. Você pode criar uma em wallet.telos.net',
        unknown_web3_login_type: 'Tipo de login web3 desconhecido: { provider }',
        connect_wallet: 'Conectar carteira',
        view_address: 'Ver endereço',
        disconnect: 'Desconectar',
        disable_wallet_extensions: 'Desative as extensões de carteira do navegador ou defina o Brave Wallet como padrão nas configurações para utilizá-lo.',
        enable_wallet_extensions: 'Habilite a extensão MetaMask e defina `preferir extensões` como padrão nas configurações da carteira do navegador para utilizá-la.',
        evm_wallets: 'Carteiras EVM',
        advanced: 'Avançado',
        continue_on_metamask: 'Continuar no Metamask',
        text1_native_wallets: 'Carteiras nativas para',
        text2_advanced_users: 'usuários avançados',
        text3_or_to_recover_assets: 'ou para recuperar ativos enviados a um endereço nativo vinculado',
        copy_to_clipboard: 'Copiar { text } para a Área de Transferência',
        latest_block: 'Último bloqueio',
        price_sources: 'Data obtained from Coingecko, CoinMarketCap or from decentralized exchanges on Telos EVM',
        marketcap_sources: 'Data obtained from Coingecko or CoinMarketCap',
        usd_marketcap: 'USD Marketcap',
        usd_price: 'Preço da USD',
        tlos_price: 'Preço da TLOS',
        gas_price: 'Preço do gás',
        click_to_expand: 'Clique para expandir a assinatura da função',
        search_evm_failed: 'A busca pelo endereço EVM vinculado à conta nativa { search_term } falhou.',
        search_failed: 'A busca falhou, digite um termo de pesquisa válido.',
        add_to_metamask: 'Adicionar { symbol } ao MetaMask',
        tx_hash: 'Tx Hash',
        block: 'Bloco',
        date: 'Data',
        method: 'Método',
        to_interacted_with: 'Para / Interagido com',
        value_transfer: 'Valor / Transferência',
        value: 'Valor',
        token: 'Token',
        unknown_precision: 'Precisão desconhecida',
        click_to_change_format: 'Clique para mudar o formato',
        func_exed_based_on_dec_data: 'Função executada com base nos dados decodificados',
        balance: 'Saldo',
        error_fetching_balance: 'erro ao recuperar o saldo',
        launch_metamask_dialog_to_add: 'Iniciar interação com o MetaMask para adicionar { symbol }',
        search_hints: 'Transação, Endereço, Bloco',
        no_provider_found: 'Mais de um provedor está ativo, desative provedores adicionais ou o provedor de carteira EVM atual não é suportado.',
        copied: 'Copiado',
        copy_to_clipboard_failed: 'Falha ao copiar para a área de transferência',
        gwei: 'Gwei',
        failed_to_fetch_transactions: 'Failed to fetch transactions.',
        failed_to_parse_transaction: 'Falha ao analisar os dados da transação, o erro foi: { message }',
        executed_based_on_decoded_data: 'Função executada com base nos dados de entrada decodificados. Para função não identificada, o ID do método é exibido.',
        unsupported_token_type: 'Tipo de token não suportado: { tokenType }',
        token_id: 'Id #{ tokenId }',
        status: 'Status',
        nonce: 'Nonce',
        from: 'De',
        to: 'Para',
        transaction: {
            form_from: 'De : ',
            form_to: 'Para : ',
            form_token: 'Token : ',
            show_short: 'Show short',
            show_total: 'Mostrar total',
            show_wei: 'Mostrar wei',
            value_uint256: 'Valor (uint256) : ',
            tlos_transfer: 'TLOS Transfer',
            native_deposit: 'Deposit from Native Telos',
            native_withdraw: 'Withdraw to Native Telos',
            unknown: 'Desconhecido',
            contract_deployment: 'Implantação de contrato',
            no_internal_trxs_found: 'Nenhuma transação interna encontrada',
            human_readable: 'Legível por humanos',
            no_logs_found: 'Nenhum registro encontrado',
            verify_related_contract: 'Verifique o contrato relacionado para cada registro para ver sua versão legível por humanos',
            failed_to_retrieve_contract: 'Falha ao recuperar o contrato com o endereço { address }',
        },
        inputs: {
            incorrect_address_array_length: 'Deve haver { size } endereços na matriz',
            incorrect_booleans_array_length: 'Deve haver { size } booleanos na matriz',
            incorrect_bytes_array_length: 'Deve haver { size } bytes na matriz',
            incorrect_sigint_array_length: 'Deve haver { size } inteiros com sinal na matriz',
            incorrect_strings_array_length: 'Deve haver { size } strings (sequência de caracteres) na matriz',
            incorrect_unsigint_array_length: 'Deve haver { size } inteiros sem sinal na matriz',

            invalid_address_array_string: 'O valor inserido não representa uma matriz de endereços',
            invalid_booleans_array_string: 'O valor inserido não representa uma matriz de booleanos',
            invalid_bytes_array_string: 'O valor inserido não representa uma matriz de bytes',
            invalid_sigint_array_string: 'O valor inserido não representa uma matriz de inteiros com sinal',
            invalid_strings_array_string: 'O valor inserido não representa uma matriz de strings (sequência de caracteres)',
            invalid_unsigint_array_string: 'O valor inserido não representa uma matriz de inteiros sem sinal',

            invalid_address_length: 'Um endereço deve ter exatamente 40 caracteres, sem incluir "0x"',
            invalid_address_start: 'Um endereço deve começar com 0x',
            invalid_address_characters: 'A entrada contém caracteres inválidos',
            readonly: 'Este campo é só de leitura',
            required: 'Este campo é obrigatório',
            too_large: 'O valor máximo para int{ size } é { max }',
            too_small: 'O valor mínimo para int{ size } é { max }',
            too_large_pow2: 'O valor máximo para uint{ size } é 2^{ size } - 1',
            too_small_pow2: 'O valor mínimo para int{ size } é -(2^{ size }) + 1',
            too_large_unsigint: 'O valor máximo para uint{ size } é 2^{ size } - 1',
            no_negative_unsigint: 'O valor para uint{ size } não deve ser negativo',
            invalid_signed_integer: 'Inteiro com sinal inválido',
            invalid_unsigint: 'A entrada deve ser um inteiro não sem sinal válido',
            str_input_placeholder: '["algum valor", ... , "valor final"]',
            str_input_hint: 'Aspas duplas em strings (sequência de caracteres) devem ser evitadas(\\")',
            address_placeholder: 'Endereço que começa com 0x',
            address_label: '{ label } (endereço)',
            boolean_array_label: '{ label } (bool[{ size }])',
        },
        health: {
            status: 'Estado',
            checked_at: 'Verificado em',
            task: 'Tarefa',
            message: 'Mensagem',
            block_height: 'Altura do bloco',
            latency: 'Latência',
            click_to_change_format: 'Clique para alterar o formato',
        },
        contract_tab: {
            copy_abi_to_clipboard: 'Copiar ABI JSON do contrato para a área de transferência',
            enter_amount: 'Selecione o número de decimais e insira um valor, este será inserido para você no parâmetro da função como uint256',
            result: 'Resultado',
            view_transaction: 'Ver transação',
            code: 'Código',
            read: 'Ler',
            write: 'Escrever',
            amount: 'Montante',
            value: 'Valor',
            custom_decimals: 'Decimais personalizados',
            custom: 'Personalizado',
            unverified_contract_source: 'O código fonte deste contrato não foi verificado.',
            click_here: 'Clique aqui',
            upload_source_files: 'para carregar arquivos de código fonte e verificar este contrato. ' +
                'Como alternativa, você pode interagir com o contrato usando um ABI arbitrário:',
            use_erc20_abi: 'Usar ABI ERC20',
            use_erc721_abi: 'Usar ABI ERC721',
            abi_from_json: 'ABI de JSON',
            paste_abi_json_here: 'Cole o ABI JSON aqui',
            abi_json_preview: 'Prévia do ABI JSON',
            provided_abi_invalid: 'O ABI fornecido é inválido',
            provided_json_invalid: 'O JSON fornecido é inválido',
            read_functions: 'Funções de leitura',
            write_functions: 'Funções de escrita',
            unverified_contract: 'Contrato não verificado',
        },
        header: {
            sign_in: 'Entrar',
            sign_out: 'Sair',
            liq_staking: 'Stake líquido',
            goto_staking: 'Ir para Stake',
            goto_health_monitor: 'ir para a página de monitoramento de saúde',
            goto_mainnet: 'Ir para Mainnet',
            goto_testnet: 'Ir para Testnet',
            health_monitor: 'Monitoramento de saúde',
            health_status: 'Estado de saúde',
            advanced: 'Avançado',
            light_mode: 'Modo claro',
            dark_mode: 'Modo escuro',
            address_not_found: 'A busca pelo endereço EVM vinculado à conta nativa { account } falhou.',
            search_failed: 'A busca falhou, insira um termo de pesquisa válido.',
            goto_address_details: 'Ir para detalhes do endereço',
            copy_address: 'Copiar endereço',
            address_copied: 'Endereço copiado para a área de transferência',
            search_placeholder: 'Endereço, Tx, Bloco',
            select_language: 'Selecione o idioma',
            open_language_switcher: 'Abrir o seletor de idioma',
        },
    },
    global: {
        records_per_page: 'Records per page:',
        max_decimals_reached: 'Please use { max } decimal places maximum',
        erc20_token: 'ERC20 Token',
        erc721_token: 'ERC721 Token',
        sign: 'Sign',
        hours: 'hours',
        updated: 'Last updated',
        action: 'Action',
        wallet_response: 'Awaiting response from your wallet provider',
        minutes: 'minutes',
        days: 'days',
        and: 'and',
        unknown: 'Unknown',
        data_behind_by: 'Sorry ! The data shown is behind by',
        not_synced: 'Indexer is not synced to latest block',
        try_reloading: 'You can try reloading the page to fix it, if the problem persist please contact a Telos team member.',
        expand: 'See more',
        error: 'Error',
        async_error_description: 'Sorry ! An error occured trying to request resources. Please make sure your internet connection is working and try again. If the error persists, contact us directly on our Telegram channel.',
        language: 'Idioma',
        cancel: 'Cancelar',
        ok: 'OK',
        dismiss: 'Descartar',
    },
    layouts: {
        health_status: 'Estado de saúde',
        stake_telos: 'Stake TLOS',
        teloscan_mainnet: 'Teloscan Mainnet',
        teloscan_testnet: 'Teloscan Testnet',
    },
};
