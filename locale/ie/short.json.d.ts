import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ie';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;