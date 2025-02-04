const traditionalChinese = {
  name: "Traditional Chinese",
  native_name: "繁體中文",
  code: "zh-TW",
};

const zh_tw = {
  translation: {
    report_bug: "回報錯誤",
    import: "匯入",
    file: "檔案",
    new: "新增",
    new_window: "新視窗",
    open: "開啟",
    save: "儲存",
    save_as: "另存新檔",
    save_as_template: "儲存為範本",
    template_saved: "範本已儲存！",
    rename: "重新命名",
    delete_diagram: "刪除圖表",
    are_you_sure_delete_diagram:
      "您確定要刪除此圖表嗎？此操作無法復原。",
    oops_smth_went_wrong: "糟糕！發生錯誤。",
    import_diagram: "匯入圖表",
    import_from_source: "從 SQL 匯入",
    export_as: "匯出為",
    export_source: "匯出 SQL",
    models: "模型",
    exit: "離開",
    edit: "編輯",
    undo: "復原",
    redo: "重做",
    clear: "清除",
    are_you_sure_clear:
      "您確定要清除圖表嗎？此操作無法復原。",
    cut: "剪下",
    copy: "複製",
    paste: "貼上",
    duplicate: "重複",
    delete: "刪除",
    copy_as_image: "複製為圖片",
    view: "檢視",
    header: "選單列",
    sidebar: "側邊欄",
    issues: "問題",
    presentation_mode: "簡報模式",
    strict_mode: "嚴謹模式",
    field_details: "欄位詳細資料",
    reset_view: "重設檢視",
    show_grid: "顯示格線",
    show_cardinality: "顯示基數",
    theme: "佈景主題",
    light: "淺色",
    dark: "深色",
    zoom_in: "放大",
    zoom_out: "縮小",
    fullscreen: "全螢幕",
    settings: "設定",
    show_timeline: "顯示時間軸",
    autosave: "自動儲存",
    panning: "平移",
    show_debug_coordinates: "顯示除錯座標",
    transform: "變形",
    viewbox: "檢視框",
    cursor_coordinates: "游標座標",
    coordinate_space: "座標空間",
    coordinate_space_screen: "螢幕",
    coordinate_space_diagram: "圖表",
    table_width: "表格寬度",
    language: "語言",
    flush_storage: "清除儲存空間",
    are_you_sure_flush_storage:
      "您確定要清除儲存空間嗎？這將無法復原地刪除您所有的圖表和自訂範本。",
    storage_flushed: "儲存空間已清除",
    help: "說明",
    shortcuts: "快速鍵",
    feedback: "意見回饋",
    no_changes: "沒有變更",
    loading: "載入中...",
    last_saved: "上次儲存時間",
    saving: "儲存中...",
    failed_to_save: "儲存失敗",
    fit_window_reset: "合適視窗 / 重設",
    zoom: "縮放",
    add_table: "新增表格",
    add_area: "新增區域",
    add_note: "新增註解",
    add_type: "新增型別",
    to_do: "待辦事項",
    tables: "表格",
    relationships: "關聯",
    subject_areas: "主題區域",
    notes: "註解",
    types: "型別",
    search: "搜尋...",
    no_tables: "沒有表格",
    no_tables_text: "開始建立您的圖表！",
    no_relationships: "沒有關聯",
    no_relationships_text: "拖曳以連接欄位並建立關聯！",
    no_subject_areas: "沒有主題區域",
    no_subject_areas_text: "新增主題區域以將表格分組！",
    no_notes: "沒有註解",
    no_notes_text: "使用註解記錄額外資訊",
    no_types: "沒有型別",
    no_types_text: "建立您自己的自訂資料型別",
    no_issues: "未偵測到問題。",
    strict_mode_is_on_no_issues:
      "嚴謹模式已關閉，因此不會顯示任何問題。",
    name: "名稱",
    type: "型別",
    null: "允許空值",
    not_null: "不允許空值",
    primary: "主鍵",
    unique: "唯一",
    autoincrement: "自動遞增",
    default_value: "預設值",
    check: "檢查表達式",
    this_will_appear_as_is: "*這將按原樣顯示在產生的指令碼中。",
    comment: "註解",
    add_field: "新增欄位",
    values: "值",
    size: "大小",
    precision: "精確度",
    set_precision: "設定精確度：(大小，位數)",
    use_for_batch_input: "使用 , 進行批次輸入",
    indices: "索引",
    add_index: "新增索引",
    select_fields: "選擇欄位",
    title: "標題",
    not_set: "未設定",
    foreign: "外來鍵",
    cardinality: "基數",
    on_update: "更新時",
    on_delete: "刪除時",
    swap: "交換",
    one_to_one: "一對一",
    one_to_many: "一對多",
    many_to_one: "多對一",
    content: "內容",
    types_info:
      "此功能適用於像 PostgreSQL 這樣的物件關聯式資料庫管理系統。\n如果用於 MySQL 或 MariaDB，將產生具有相應 JSON 驗證檢查的 JSON 型別。\n如果用於 SQLite，它將被轉換為 BLOB。\n如果用於 MSSQL，將產生到第一個欄位的型別別名。",
    table_deleted: "表格已刪除",
    area_deleted: "區域已刪除",
    note_deleted: "註解已刪除",
    relationship_deleted: "關聯已刪除",
    type_deleted: "型別已刪除",
    cannot_connect: "無法連接，欄位型別不同",
    copied_to_clipboard: "已複製到剪貼簿",
    create_new_diagram: "建立新圖表",
    cancel: "取消",
    open_diagram: "開啟圖表",
    rename_diagram: "重新命名圖表",
    export: "匯出",
    export_image: "匯出圖片",
    create: "建立",
    confirm: "確認",
    last_modified: "上次修改時間",
    drag_and_drop_files: "拖曳檔案到此處或點選上傳。",
    support_json_and_ddb: "支援 JSON 和 DDB 檔案",
    upload_sql_to_generate_diagrams:
      "上傳 SQL 檔案以自動產生表格和欄位。",
    overwrite_existing_diagram: "覆寫現有圖表",
    only_mysql_supported:
      "*目前僅支援載入 MySQL 指令碼。",
    blank: "空白",
    filename: "檔案名稱",
    table_w_no_name: "宣告了一個沒有名稱的表格",
    duplicate_table_by_name: "表格名稱 '{{tableName}}' 重複",
    empty_field_name: "表格 '{{tableName}}' 中的欄位 `name` 為空",
    empty_field_type: "表格 '{{tableName}}' 中的欄位 `type` 為空",
    no_values_for_field:
      "表格 '{{tableName}}' 的 '{{fieldName}}' 欄位型別為 `{{type}}`，但未指定任何值",
    default_doesnt_match_type:
      "表格 '{{tableName}}' 中欄位 '{{fieldName}}' 的預設值與其型別不符",
    not_null_is_null:
      "表格 '{{tableName}}' 中的 '{{fieldName}}' 欄位為 NOT NULL，但預設值為 NULL",
    duplicate_fields:
      "表格 '{{tableName}}' 中的欄位名稱 '{{fieldName}}' 重複",
    duplicate_index:
      "表格 '{{tableName}}' 中的索引名稱 '{{indexName}}' 重複",
    empty_index: "表格 '{{tableName}}' 中的索引未指定任何欄位",
    no_primary_key: "表格 '{{tableName}}' 沒有主鍵",
    type_with_no_name: "宣告了一個沒有名稱的型別",
    duplicate_types: "型別名稱 '{{typeName}}' 重複",
    type_w_no_fields: "宣告了一個沒有欄位的空型別 '{{typeName}}'",
    empty_type_field_name: "型別 '{{typeName}}' 中的欄位 `name` 為空",
    empty_type_field_type: "型別 '{{typeName}}' 中的欄位 `type` 為空",
    no_values_for_type_field:
      "型別 '{{typeName}}' 的 '{{fieldName}}' 欄位型別為 `{{type}}`，但未指定任何值",
    duplicate_type_fields:
      "自訂型別 '{{typeName}}' 中的欄位名稱 '{{fieldName}}' 重複",
    duplicate_reference: "參考名稱 '{{refName}}' 重複",
    circular_dependency: "涉及到表格 '{{refName}}' 的循環相依性",
    timeline: "時間軸",
    priority: "優先順序",
    none: "無",
    low: "低",
    medium: "中",
    high: "高",
    sort_by: "排序方式",
    my_order: "我的排序",
    completed: "已完成",
    alphabetically: "按字母順序",
    add_task: "新增任務",
    details: "詳細資料",
    no_tasks: "您還沒有任務。",
    no_activity: "您還沒有活動。",
    move_element: "將 {{name}} 移動到 {{coords}}",
    edit_area: "{{extra}} 編輯區域 {{areaName}}",
    delete_area: "刪除區域 {{areaName}}",
    edit_note: "{{extra}} 編輯註解 {{noteTitle}}",
    delete_note: "刪除註解 {{noteTitle}}",
    edit_table: "{{extra}} 編輯表格 {{tableName}}",
    delete_table: "刪除表格 {{tableName}}",
    edit_type: "{{extra}} 編輯型別 {{typeName}}",
    delete_type: "刪除型別 {{typeName}}",
    add_relationship: "新增關聯",
    edit_relationship: "{{extra}} 編輯關聯 {{refName}}",
    delete_relationship: "刪除關聯 {{refName}}",
    not_found: "沒有找到",
    pick_db: "選擇資料庫",
    generic: "通用",
    generic_description:
      "通用圖表可以匯出到任何 SQL 語法，但支援的資料型別較少。",
    enums: "列舉",
    add_enum: "新增列舉",
    edit_enum: "{{extra}} 編輯列舉 {{enumName}}",
    delete_enum: "刪除列舉",
    enum_w_no_name: "找到沒有名稱的列舉",
    enum_w_no_values: "找到沒有值的列舉 '{{enumName}}'",
    duplicate_enums: "列舉名稱 '{{enumName}}' 重複",
    no_enums: "沒有列舉",
    no_enums_text: "在此定義列舉",
    declare_array: "宣告陣列",
    empty_index_name: "在表格 '{{tableName}}' 中宣告了一個沒有名稱的索引",
    didnt_find_diagram: "糟糕！找不到圖表。",
  },
};

export { zh_tw, traditionalChinese };
