import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'eu';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;