import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ja';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;