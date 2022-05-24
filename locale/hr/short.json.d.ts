import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'hr';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;