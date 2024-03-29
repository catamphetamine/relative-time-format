import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'my';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;