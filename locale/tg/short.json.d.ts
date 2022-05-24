import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tg';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;