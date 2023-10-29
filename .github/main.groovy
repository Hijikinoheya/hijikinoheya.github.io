task checkSoftwareStart {
    doLast {
        // ソフトウェアの起動確認を実行するコードを記述
        def softwareProcess = new ProcessBuilder('path/to/software/executable').start()
        
        // 起動確認のための処理（例：ポートの待機など）
        Thread.sleep(5000) // 5秒待機
        
        // ソフトウェアの起動状態を確認
        if (softwareProcess.isAlive()) {
            println("ソフトウェアが正常に起動しました。")
        } else {
            println("ソフトウェアの起動に問題が発生しました。")
        }
        
        // ソフトウェアのプロセスを終了
        softwareProcess.destroy()
    }
}