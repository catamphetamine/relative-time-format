import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pa';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;