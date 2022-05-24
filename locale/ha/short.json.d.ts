import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ha';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;