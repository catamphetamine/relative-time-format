import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'to';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;