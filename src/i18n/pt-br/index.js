/* eslint-disable max-len*/

export default {
    locale: {
        current_language_name: 'Português',
    },
    pages: {
        staking: {
            sign_in: 'Faça login primeiro para interagir com nossa interface de staking',
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
            stake_tlos_success: 'Aplicação bem-sucedida! Ver transação: ',
            unstake_stlos_success: 'Desaplicação bem-sucedida! Ver transação: ',
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
        issuer: 'Issuer',
        account_not_found: 'Não conseguimos encontrar esse conta',
        approvals: 'Approvals',
        supported_interfaces: 'interfaces suportadas conhecida(s)',
        explore_transactions: 'Explorar transações',
        recent_transactions: 'Transações recentes',
        telos_evm_explorer: 'Explorador Telos EVM',
        rpc_endpoints: 'Endpoints RPC',
        monitor: 'Monitor',
        oops: 'Ops! Nada por aqui...',
        go_home: 'Ver Início',
        minted: 'Minted',
        holders: 'Holders',
        evm_holders: 'Todos os detentores de Telos EVM',
        total_nfts_minted: 'Total de NFTs cunhadas nessa coleção',
        telos_supply: 'Telos EVM fornecimento',
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
        loading_transfers: 'Loading transfers',
        loading_approvals: 'Loading approvals',
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
            token_id: 'Token ID',
            approved: 'Aprovado',
            login_account: 'Faça login nesta conta usando sua carteira para poder ver suas aprovações.',
            approval_text: 'É necessária uma assinatura de sua carteira para atualizar o valor das aprovações selecionadas para 0.',
            type: 'Tipo',
            delete: 'Excluir',
            delete_all: 'Excluir todos',
            unselect_all: 'Desmarque todos',
            cancel: 'Cancelar',
            remove_approval: 'Remova',
            removal_approval: 'Remover aprovação única',
            unselect_all_approvals: 'Desmarque todas as aprovações',
            infinite: 'Infinita',
            infinite_tooltip: 'A permissão é maior que o fornecimento total deste token',
            select: 'Selecione a aprovação',
            unselect: 'Desmarcar aprovação',
            update: 'Atualização de aprovação',
            update_description: 'Insira o novo valor para permitir o gastador. Isso exigirá uma assinatura de carteira.',
            removal_approvals: 'Remover todas as aprovações',
            removal_selected_approvals: 'Remover todas as aprovações selecionadas',
            update_failed: 'Falha ao atualizar a aprovação',
            update_success: 'A aprovação de {spender} para o {contract} foi atualizada com sucesso',
            spender: 'Gastador',
            amount: 'Mesada',
        },
        nfts : {
            show_without_metadata: 'Mostrar NFTs sem metadados',
            id: 'Token ID',
            name: 'Nome',
            collection: 'Coleção',
            nfts: 'NFTs',
            metadata: 'Meta',
            minter: 'Minter',
            owner: 'Proprietário',
            contract: 'Contrato',
            image: 'Imagem',
            media: 'Media',
            minted: 'Bloco cunhado',
            attributes: 'atributo',
            ipfs: 'Obtenha do IPFS',
            consult_metadata: 'Consultar metadados',
            consult_media: 'Consultar media',
            consult_collection: 'Consultar coleção',
        },
        holders : {
            show_system_contracts: 'Mostrar contratos do sistema',
            holder: 'Suporte',
            balance: 'Saldo',
            global_supply: 'Fornecimento global',
            telos_supply: 'Fornecimento Telos EVM',
            updated: 'Ultima atualização',
        },
        known_tokens: 'Known tokens',
        other_tokens: 'Unknown tokens',
        no_balances_found: 'Nenhum saldo de token erc20 foi encontrado para este endereço',
        internal_txns: 'Transações internas',
        n_internal_txns: '{ amount } transações internas',
        none: 'Nenhum',
        verify_prompt: 'Este contrato ainda não foi verificado. Você gostaria de carregar o(s) contrato(s) e os metadados para verificar o código-fonte agora?',
        verify_contract: 'Verificar contrato',
        search_evm_address_failed: 'A busca pelo endereço EVM vinculado à conta nativa { accountName } falhou. Você pode criar uma em wallet.telos.net',
        unknown_web3_login_type: 'Tipo de login web3 desconhecido: { provider }',
        unknown_evm_login_provider: 'Provedor de login EVM desconhecido: { provider }',
        unknown_native_login_provider: 'Provedor de login nativo desconhecido: { provider }',
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
        price_sources: 'Data obtained from Coingecko, CoinMarketCap or if unavailable from decentralized exchanges on Telos EVM',
        marketcap_sources: 'Data obtained from Coingecko or CoinMarketCap',
        usd_marketcap: 'USD Marketcap',
        usd_price: 'Preço da USD',
        usd_value: 'USD Value',
        tlos_price: 'Preço da TLOS',
        gas_price: 'Preço do gás',
        click_to_expand: 'Clique para expandir',
        click_to_fold: 'Clique para dobrar',
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
            in: 'in',
            out: 'out',
            form_from: 'De : ',
            form_to: 'Para : ',
            load_error: 'Could not load transactions',
            form_token: 'Token : ',
            show_short: 'Show short',
            show_total: 'Mostrar total',
            show_wei: 'Mostrar wei',
            value_uint256: 'Valor (uint256) : ',
            tlos_transfer: 'TLOS Transfer',
            native_deposit: 'Deposit from Native Telos',
            native_withdraw: 'Withdraw to Native Telos',
            unknown: 'Desconhecido',
            contract_deployed: 'Contract Deployed',
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
            odd_number_of_bytes: 'Deve haver um número par de caracteres de byte',
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
            category: 'Category',
            block_height: 'Altura do bloco',
            latency: 'Latência',
            success: 'Success',
            info: 'Info',
            alert: 'Alert',
            error: 'Error',
            click_to_change_format: 'Clique para alterar o formato',
        },
        contract_tab: {
            abi_loaded_from_interface: 'Essa ABI genérica foi carregada usando a função supportsInterface() do IEP-165 e pode não ser exaustiva. Algumas das funções exibidas podem não estar implementadas. Verifique o contrato para poder interagir com ele usando sua ABI completa.',
            copy_abi_to_clipboard: 'Copiar ABI JSON do contrato para a área de transferência',
            enter_amount: 'Selecione o número de decimais e insira um valor, este será inserido para você no parâmetro da função como uint256',
            result: 'Resultado',
            view_transaction: 'Ver transação',
            code: 'Código',
            bytecode: 'Código de bytes',
            read: 'Ler',
            write: 'Escrever',
            amount: 'Montante',
            value: 'Valor',
            custom_decimals: 'Decimais personalizados',
            custom: 'Personalizado',
            unverified_contract_source: 'O código fonte deste contrato não foi verificado.',
            click_here: 'Clique aqui',
            upload_source_files: 'para carregar arquivos de código fonte e verificar este contrato. ',
            abi_autoloaded: 'Enquanto isso, você pode interagir com o contrato usando nossa ABI predefinida carregada automaticamente.',
            choose_abi: 'Como alternativa, você pode interagir com o contrato usando uma de nossas ABIs predefinidas ou uma JSON personalizada:',
            use_erc20_abi: 'Usar ABI ERC20',
            use_erc721_abi: 'Usar ABI ERC721',
            use_erc1155_abi: 'Usar ABI ERC1155',
            abi_from_json: 'ABI de JSON',
            paste_abi_json_here: 'Cole o ABI JSON aqui',
            abi_json_preview: 'Prévia do ABI JSON',
            provided_abi_invalid: 'O ABI fornecido é inválido',
            provided_json_invalid: 'O JSON fornecido é inválido',
            read_functions: 'Funções de leitura',
            write_functions: 'Funções de escrita',
            unverified_contract: 'Contrato não verificado',
            verified_contract: 'Contrato verificado',
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
        all: 'Todos',
        true: 'true',
        false: 'false',
        close: 'Close',
        toggle_fullscreen: 'Toggle fullscreen mode',
        name: 'Name',
        symbol: 'Symbol',
        show_table: 'Show table',
        show_grid: 'Show grid',
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
        data_behind_by: 'Desculpe-me! Os dados mostrados são atrasados por',
        not_synced: 'O indexador não está sincronizado com o bloco mais recente',
        try_reloading: 'Tente recarregar a página para corrigir o problema, Se o problema persistir, entre em contato com um membro da equipe da Telos.',
        expand: 'Veja mais',
        error: 'Erro',
        async_error_description: 'Desculpe! Ocorreu um erro ao tentar solicitar recursos. Verifique se sua conexão com a Internet está funcionando e tente novamente. Se o erro persistir, entre em contato conosco diretamente em nosso canal do Telegram.',
        language: 'Idioma',
        cancel: 'Cancelar',
        ok: 'OK',
        dismiss: 'Descartar',
        internal_error: 'Erro interno',
    },
    layouts: {
        health_status: 'Estado de saúde',
        stake_telos: 'Stake TLOS',
        teloscan_mainnet: 'Teloscan Mainnet',
        teloscan_testnet: 'Teloscan Testnet',
    },
    notification: {
        success_title_trx: 'Sucesso',
        success_title_copied: 'Copiado',
        success_message_trx: 'Sua transação foi processada. Para obter informações detalhadas, clique no link abaixo.',
        success_message_revoking: 'A revogação da alocação de <b>{symbol}</b> para <b>{address}</b> foi realizada com sucesso.',
        success_message_copied: 'O nome da sua conta foi copiado para a área de transferência.',
        success_see_trx_label: 'Ver Transação',
        dismiss_label: 'Descartar',
        error_title: 'Ops!',
        error_title_disconnect: 'Sem conexão com a Internet',
        error_message_disconnect: 'Desculpe, parece que você não está conectado à Internet. Por favor, verifique sua conexão de rede e tente novamente.',
        error_see_details_label: 'Ver Detalhes',
        error_details_title: 'Detalhes do Erro',
        neutral_message_sending: 'Enviando <b>{quantity}</b> para <b>{address}</b>',
        neutral_message_staking: 'Depositando <b>{quantity} {symbol}</b>',
        neutral_message_unstaking: 'Preparando retirada de <b>{quantity} {symbol}</b>',
        neutral_message_revoking: 'Revogando alocação de <b>{symbol}</b> para <b>{address}</b>',
        neutral_message_wrapping: 'Convertendo <b>{quantity} {symbol}</b> para ERC20',
        neutral_message_unwrapping: 'Restaurando <b>{quantity} {symbol}</b>',
        neutral_message_withdrawing: 'Retirando <b>{quantity} {symbol}</b>',
        dont_show_message_again: 'Não mostrar esta mensagem novamente',
        error_message_sending: 'Ocorreu um erro ao enviar <b>{quantity}</b> para <b>{address}</b>',
        error_message_staking: 'Ocorreu um erro ao depositar <b>{quantity} {symbol}</b>',
        error_message_unstaking: 'Ocorreu um erro ao preparar a retirada de <b>{quantity} {symbol}</b>',
        error_message_revoking: 'Ocorreu um erro ao revogar a alocação de <b>{symbol}</b> para <b>{address}</b>',
        error_message_wrapping: 'Ocorreu um erro ao converter <b>{quantity} {symbol}</b> para ERC20',
        error_message_unwrapping: 'Ocorreu um erro ao restaurar <b>{quantity} {symbol}</b>',
        error_message_withdrawing: 'Ocorreu um erro ao retirar <b>{quantity} {symbol}</b>',
        error_message_custom_call: 'Ocorreu um erro ao chamar <b>{name}</b> com <b>{params} parâmetros</b>',
        error_message_custom_call_send: 'Ocorreu um erro ao chamar <b>{name}</b> com <b>{params} parâmetros</b> e enviar <b>{quantity} {symbol}</b>',
        neutral_message_custom_call: 'Chamando <b>{name}</b> com <b>{params} parâmetros</b>',
        neutral_message_custom_call_send: 'Chamando <b>{name}</b> com <b>{params} parâmetros</b> e enviando <b>{quantity} {symbol}</b>',
    },
    antelope: {
        evm: {
            error_unpredictable_gas_limit: 'Não foi possível estimar o limite de gás para esta transação',
            error_transaction_canceled: 'Você cancelou a ação',
        },
    },
    temporal: {
        telos_cloud_discontinued_title: 'Importante',
        telos_cloud_discontinued_message_title: 'Atenção utilizadores: A opção de conta Telos Cloud Wallet será descontinuada.',
        telos_cloud_discontinued_message_body: 'A opção da conta Telos Cloud Wallet (ORE ID via Google) para ligar e assinar transacções será descontinuada após 31 de dezembro. Se utiliza a Telos Cloud Wallet para aceder à sua conta, transfira os seus activos para outra carteira antes deste prazo. <strong>Esta alteração não afecta os utilizadores que acedem às suas contas através de Metamask, WalletConnect, Anchor ou outros métodos de início de sessão.</strong>',
    },
};
